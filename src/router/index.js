import Vue from 'vue'
import Router from 'vue-router'

import DataViz from '@/components/DataViz'
import Page2 from '@/components/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'DataViz',
      component: DataViz
    },
    {
      path: '/page2/',
      name: 'Page2',
      component: Page2
    }
  ]
})
