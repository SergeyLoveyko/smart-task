import { createRouter, createWebHistory } from 'vue-router'
import UsersList from '../views/UsersList'
import UserCreate from '../views/UserCreate'

const routes = [
  {
    path: '/',
    name: 'usersList',
    component: UsersList
  },
  {
    path: '/users/create',
    name: 'userCreate',
    component: UserCreate
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router