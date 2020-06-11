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
      component: Home,
      meta: {
        title: 'Masjid Al Muminun Funds'
      }
    },
    {
      path: '/goal',
      name: 'FundsGoal',
      component: FundsGoal,
      meta: {
        title: 'MM Funds Goal'
      }
    },
    {
      path: '/usage',
      name: 'FundsUsage',
      component: FundsUsage,
      meta: {
        title: 'MM Funds Usage'
      }
    },
    {
      path: '/distribution',
      name: 'FundsDistribution',
      component: FundsDistribution,
      meta: {
        title: 'MM Funds Distribution'
      }
    }
  ]
})