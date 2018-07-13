import Vue from 'vue'
import Router from 'vue-router'

import DataViz from '@/components/DataViz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DataViz',
      component: DataViz
    }
  ]
})
