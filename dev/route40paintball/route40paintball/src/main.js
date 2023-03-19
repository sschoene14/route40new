import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Home from '/src/views/Home.vue'
import Info from '/src/views/Info.vue'
import Rules from '/src/views/Rules.vue'
import Cost from '/src/views/Cost.vue'
import Events from '/src/views/Events.vue'
import Contact from '/src/views/Contact.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/', name: "Home", component: Home},
        {path:'/info', name: "Info", component: Info},
        {path:'/rules', name: "Rules", component: Rules},
        {path:'/cost', name: "Cost", component: Cost},
        {path:'/events', name: "Events", component: Events},
        {path:'/contact', name: "Contact", component: Contact},
    ]
})

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')
