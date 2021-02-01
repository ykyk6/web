import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Swal from 'sweetalert2'
import Home from '../views/Home.vue'
import Onlineshop from '../views/Onlineshop.vue'
import Backmember from '../views/Backmember.vue'
// import Layout from '../assets/layouts/MainLayout.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Layout',
  //   component: Layout
  // },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'ABOUT',
    component: () => import(/* webpackChunkName: "about" */ '../components/style/ABOUT.vue')
  },
  {
    path: '/onlineshop',
    name: 'Onlineshop',
    component: Onlineshop,
    redirect: '/onlineshop/matchabowl',
    children: [
      // {
      //   path: '',
      //   name: 'Chagu',
      //   component: () => import(/* webpackChunkName: "onlineshop" */ '../components/Chagu.vue'),
      //   meta: {
      //     name: '茶具'
      //   }
      // },
      {
        path: 'matchabowl',
        name: 'Matchabowl',
        component: () => import(/* webpackChunkName: "onlineshop" */ '../components/Matchabowl.vue'),
        meta: {
          name: '茶碗'
        }
      },
      {
        path: 'chagu',
        name: 'Chagu',
        component: () => import(/* webpackChunkName: "onlineshop" */ '../components/Chagu.vue'),
        meta: {
          name: '茶具'
        }
      },
      {
        path: 'matcha',
        name: 'Matcha',
        component: () => import(/* webpackChunkName: "onlineshop" */ '../components/Matcha.vue'),
        meta: {
          name: '抹茶'
        }
      },
      {
        path: 'dessert',
        name: 'Dessert',
        component: () => import(/* webpackChunkName: "onlineshop" */ '../components/Dessert.vue'),
        meta: {
          name: 'スイーツ'
        }
      },
      {
        path: 'others',
        name: 'Others',
        component: () => import(/* webpackChunkName: "onlineshop" */ '../components/Others.vue'),
        meta: {
          name: 'Others'
        }
      }
    ]
  },
  {
    path: '/message',
    name: 'Message',
    component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')
  },
  {
    path: '/thecart',
    name: 'TheCart',
    component: () => import(/* webpackChunkName: "about" */ '../views/TheCart.vue')
  },
  {
    path: '/frontmember',
    name: 'Frontmember',
    component: () => import(/* webpackChunkName: "about" */ '../views/Frontmember.vue')
  },
  {
    path: '/backmember',
    name: 'Backmember',
    component: Backmember
    // redirect: '/backmember/backorder',
    // children: [
    //   {
    //     path: 'backorder',
    //     name: 'backorder',
    //     component: () => import(/* webpackChunkName: "onlineshop" */ '../components/Backorder.vue'),
    //     meta: {
    //       name: '顧客訂單管理'
    //     }
    //   },
    //   {
    //     path: 'backshop',
    //     name: 'backshop',
    //     component: () => import(/* webpackChunkName: "onlineshop" */ '../components/Backshop.vue'),
    //     meta: {
    //       name: '商品上傳'
    //     }
    //   },
    //   {
    //     path: 'editshop',
    //     name: 'editshop',
    //     component: () => import(/* webpackChunkName: "onlineshop" */ '../components/Editshop.vue'),
    //     meta: {
    //       name: '商品編輯'
    //     }
    //   },
    //   {
    //     path: 'mesmange',
    //     name: 'mesmange',
    //     component: () => import(/* webpackChunkName: "onlineshop" */ '../components/Mesmange.vue'),
    //     meta: {
    //       name: '意見欄管理'
    //     }
    //   }
    // ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/reg',
    name: 'Reg',
    component: () => import(/* webpackChunkName: "about" */ '../views/Reg.vue')
  },
  {
    path: '/orderinformation',
    name: 'orderinformation',
    component: () => import(/* webpackChunkName: "about" */ '../components/orderinformation.vue')
  },
  {
    path: '/ordersure',
    name: 'ordersure',
    component: () => import(/* webpackChunkName: "about" */ '../components/ordersure.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Frontmember' && store.state.user.id.length === 0) {
    // alert('ログインしてください')
    Swal.fire({
      icon: 'info',
      title: 'ログインしてください。'
    }).then(() => {
      next({ name: 'Login' })
    }).then(() => {
      next()
    })
  } else {
    next()
  }
})

export default router
