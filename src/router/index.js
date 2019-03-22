import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  const app = router.app
  const store = app.$options.store
  const auth = store.state.auth
  
//导航到新页面前隐藏消息提示
  app.$message.hide()

  if (
    (auth && to.path.indexOf('/auth/') !== -1) ||
    (!auth && to.meta.auth)
  ) {
    next('/')
  } else {
    next()
  }
})

export default router