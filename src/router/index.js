import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import myCenter from '@/components/my'
import shopCar from '@/components/shopCar.vue'
import member from '@/components/member.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/myCenter',
      component: myCenter
    },{
      path: '/shopCar',
      component: shopCar
    },{
      path: '/member',
      component: member
    },
  ],
  mode: "history"
})
