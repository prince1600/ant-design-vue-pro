import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress//nprogress.css'
import NotFound from '@/views/404'

Vue.use(VueRouter)

const routes = [
  // user
  {
    path: '/user',
    hideInMenu: true,
    component: () => import(/* webpackChunkName: 'layout' */ '@/components/UserLayout'),
    redirect: '/user/login',
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import(/* webpackChunkName: 'user' */ '@/views/User/Login')
      },
      {
        path: '/user/register',
        name: 'register',
        component: () => import(/* webpackChunkName: 'user' */ '@/views/User/Register')
      }
    ]
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: 'layout' */ '@/components/layouts/BasicLayout'),
    redirect: '/dashboard/analysis',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        meta: { icon: 'dashboard', title: '仪表盘' },
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            meta: { title: '分析页' },
            component: () => import(/* webpackChunkName: 'dashboard' */ '@/views/Dashboard/Analysis')
          }
        ]
      },
      // form
      {
        path: '/form',
        name: 'form',
        meta: { icon: 'form', title: '表单' },
        component: { render: h => h('router-view') },
        children: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            meta: { title: '基础表单' },
            component: () => import(/* webpackChunkName: 'form' */ '@/views/Forms/BasicForm')
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            redirect: '/form/step-form/info',
            meta: { title: '分步表单' },
            hideChildMenu: true,
            component: () => import(/* webpackChunkName: 'form' */ '@/views/Forms/StepForm'),
            children: [
              {
                path: '/form/step-form/info',
                name: 'info',
                component: () => import(/* webpackChunkName: 'form' */ '@/views/Forms/StepForm/Step1')
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: () => import(/* webpackChunkName: 'form' */ '@/views/Forms/StepForm/Step2')
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: () => import(/* webpackChunkName: 'form' */ '@/views/Forms/StepForm/Step3')
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    name: '404',
    hideInMenu: true,
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start()
  }
  next()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
