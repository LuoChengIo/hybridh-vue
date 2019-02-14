import router from '@/router'
router.beforeEach((to, from, next) => {
  // ...
  document.title = to.meta.title

  if (to.meta.title === '大概') {
    next(false) //  中断导航
  } else {
    next()
  }
})
