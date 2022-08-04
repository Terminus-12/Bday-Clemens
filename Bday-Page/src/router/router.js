import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Details from '../components/Details.vue'
import Privacy from '../components/Privacy.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/details', component: Details },
    { path: '/privacy', component: Privacy }
]



export default createRouter({
    history: createWebHashHistory(),
    routes,
})
