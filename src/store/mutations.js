import {
    SET_ACCOUNTID,
    SIGNIN,
    SIGNOUT,
    SET_NETCONF,
    SET_ENSID,
    SET_TOAST,
    SET_STATUS,
    SET_HARDWARE,
    SET_CHARTS,
    SET_FLOWS,
    GET_ERROR,
} from "./type"


const mutations = {
    [SET_ACCOUNTID](state, payload) {
        state.accountid = payload
    },
    [SIGNIN](state, payload) {
        state.authdata = payload

    },
    [SIGNOUT](state, payload) {
        state.authdata = payload
        localStorage.removeItem("username");
        localStorage.removeItem("authtoken");
    },
    [SET_NETCONF](state, payload) {
        state.netconf = payload
    },
    [SET_ENSID](state, payload) {
        state.ensid = payload
    },
    [SET_TOAST](state, payload) {
        state.toast.unshift(payload)
    },
    [SET_STATUS]: (state, status) => {
        state.status = status
    },
    [SET_HARDWARE]: (state, hardware) => {

        state.hardware = hardware
    },
    [SET_CHARTS]: (state, charts) => {
        state.charts = charts
    },
    [SET_FLOWS]: (state, flows) => {
        state.flows = flows
    },
    [GET_ERROR](state, error) {
        console.log("error:", error)
    },
}


export default mutations