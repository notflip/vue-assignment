import Vue from 'vue'
import VueRouter from 'vue-router'
import Repositories from '../views/Repositories.vue'
import RepositoryCommits from '../views/RepositoryCommits.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Repositories',
    component: Repositories
  },
  {
    path: '/repositories/:repositoryId',
    name: 'commits',
    component: RepositoryCommits,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
