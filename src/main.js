import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { IonicVue } from '@ionic/vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).use(IonicVue).mount('#app')

