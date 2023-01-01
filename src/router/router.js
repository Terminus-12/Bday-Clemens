import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Details from '../components/Details.vue'
import Privacy from '../components/Privacy.vue'
import Guests from '../components/Guests.vue'
import Join from '../components/Join.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/details', component: Details },
    { path: '/privacy', component: Privacy },
    { path: '/guests/:status?', component: Guests },
    { path: '/join/:status?', component: Join }
]



export default createRouter({
    history: createWebHashHistory(),
    routes,
})
