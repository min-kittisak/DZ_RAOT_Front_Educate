import {createRouter , createWebHistory} from 'vue-router'
import UserManagement from '../views/UserManagement.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[{
        path: '/',
        name: 'Users',
        component: UserManagement
    }]
})
export default router