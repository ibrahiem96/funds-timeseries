import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'chart.js'
import 'hchs-vue-charts'

Vue.use(window.VueCharts)

Vue.config.productionTip = false

new Vue({
  router,
  watch: {
    '$route':{
      handler: (to) => {
        document.title = to.meta.title || 'Your Website'
      },
       immediate: true
    }
  },
  render: h => h(App)
}).$mount('#app')