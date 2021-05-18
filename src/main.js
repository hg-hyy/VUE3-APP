import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/css/sidebars.css"
import "./static/css/signin.css"
import "bootstrap";
createApp(App).use(store).use(router).mount('#app')