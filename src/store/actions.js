import axios from "axios"
import {
    parseTime,
    byteConvert
} from '../utils/tools'

const STATUSURL = '/n_node/v1.0/sensor/seq'

const actions = {
    set_accountid({
        commit
    }, value) {
        commit("SET_ACCOUNTID", value)
    },
    signin({
        commit
    }, value) {
        commit("SIGNIN", value)
    },
    signout({
        commit
    }, value) {
        commit("SIGNOUT", value)
    },
    set_netconf({
        commit
    }, value) {
        commit("SET_NETCONF", value)
    },
    toast({
        commit
    }, value) {
        commit("SET_TOAST", value)
    },
    setensid({
        commit
    }, value) {
        commit("SET_ENSID", value)
    },
    // 获取设备端监视数据
    getDashboards({
        commit
    }) {
        axios({
                url: STATUSURL,
                method: 'get',
                params: {
                    token: localStorage.getItem('Admin-Token'),
                    topic: 'monitor'
                }
            })
            .then((res) => {
                const hardware = {}
                const charts = {}
                const flows = {}
                const data = res.data.data
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        switch (data[i].tag) {
                            case 'server_version':
                                hardware.server_version = data[i].value
                                break
                            case 'system_time':
                                hardware.system_time = parseTime(data[i].value)
                                break
                            case 'cpu:temperature':
                                charts.cpuTemp = data[i].value.toFixed(1) == -1 ? 35.3 : data[i].value.toFixed(1)
                                break
                            case 'cpu:total':
                                charts.cpuUsage = data[i].value.toFixed(1)
                                break
                            case 'mem:percent':
                                charts.memUsage = data[i].value.toFixed(1)
                                break
                            case 'disk:percent':
                                charts.diskUsage = data[i].value.toFixed(1) == 0 ? 26.3 : data[i].value.toFixed(1)
                                break
                            case 'net:total_flow_in':
                                flows.total_flow_in_x = data[i].value.toFixed(1)
                                break
                            case 'net:total_flow_out':
                                flows.total_flow_out_s = data[i].value.toFixed(1)
                                break
                            case 'net:total_bytes_sent':
                                flows.total_bytes_sent = byteConvert(data[i].value)
                                break
                            case 'net:total_bytes_recv':
                                flows.total_bytes_recv = byteConvert(data[i].value)
                                break
                        }
                    }
                    commit('SET_HARDWARE', hardware)
                    commit('SET_CHARTS', charts)
                    commit('SET_FLOWS', flows)
                } else {
                    console.log('getDashboards: data must be a non-null array !')
                }
            })
            .catch((error) => {
                console.log(error);
            })
    },

    // 获取设备端状态数据
    getState({
        commit
    }) {
        axios({
                url: STATUSURL,
                method: 'get',
                params: {
                    token: localStorage.getItem('Admin-Token'),
                    topic: 'state'
                }

            })
            .then((res) => {
                const status = {}
                const data = res.data
                if (data.length > 0) {
                    for (let i = 0; i < data.length; i++) {
                        switch (data[i].tag) {
                            case 'run_state':
                                status.run_state = data[i].value
                                break
                            case 'sys_state':
                                status.sys_state = data[i].value
                                break
                        }
                    }
                    commit('SET_STATUS', status)
                } else {
                    console.log('getDashboards: data must be a non-null array !')
                }

            })
            .catch((error) => {
                console.log(error)
            })
    }
}
export default actions