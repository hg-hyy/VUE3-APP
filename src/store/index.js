import {
    createStore
} from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'


const store = createStore({
    state,
    getters,
    mutations,
    actions,
})


export default store