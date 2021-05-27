import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/sidebars.css"
import "./static/js/all"
import "bootstrap";
createApp(App).use(store).use(router).mount('#app')