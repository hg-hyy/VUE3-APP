const state = () => {
    return {
        ensid: 0,
        authdata: {
            isAuthenticated: 0,
            username: '',
        },
        accountid: '',
        toast: [],
        netconf: [],
        set_netconf_flag: 'ok',
        status: {
            run_state: 0,
            sys_state: 0
        },
        hardware: {
            server_version: '',
            system_time: ''
        },
        charts: {
            cpuTemp: 0,
            cpuUsage: 0,
            memUsage: 0,
            diskUsage: 0
        },
        flows: {
            total_flow_in_x: 0,
            total_flow_out_s: 0,
            total_bytes_sent: 0,
            total_bytes_recv: 0
        },
        business_group_id: 1
    }
}

export default state