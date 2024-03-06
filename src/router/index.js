import { createRouter, createWebHistory } from 'vue-router'
import Home from './../components/view/HomePage.vue'
import Login from './../components/view/LoginPage.vue'
const routes = [{
    path: "/",
    component: Login,
    name: "LoginPage"
},
{
    path: "/home",
    component: Home,
    name: "HomePage"
},
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router