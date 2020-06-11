import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import FundsUsage from '@/views/FundsUsage'
import FundsGoal from '@/views/FundsGoal'
import FundsDistribution from '@/views/FundsDistribution'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/goal',
      name: 'FundsGoal',
      component: FundsGoal
    },
    {
      path: '/usage',
      name: 'FundsUsage',
      component: FundsUsage
    },
    {
      path: '/distribution',
      name: 'FundsDistribution',
      component: FundsDistribution
    }
  ]
})