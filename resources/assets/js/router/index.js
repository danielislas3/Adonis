import Vue from 'vue'
import Router from 'vue-router'

import Index from '../../components/Index.vue'
import About from '../../components/About.vue'


Vue.use(Router)

export default new Router({
    mode: 'history', // use HTML5 history instead of hashes
    routes: [
      {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    ]
})
