import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Details from '../components/Details.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/details', component: Details }
]



export default createRouter({
    history: createWebHashHistory(),
    routes,
})
