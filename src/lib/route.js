import VueRouter from 'vue-router';

const container = resolve => {
  require.ensure(['../views/container/container.vue'], () => {
    resolve(require('../views/container/container.vue'));
  });
};
const home = resolve => {
  require.ensure(['../views/home/home.vue'], () => {
    resolve(require('../views/home/home.vue'));
  });
};
const series = resolve => {
  require.ensure(['../views/series/series.vue'], () => {
    resolve(require('../views/series/series.vue'));
  });
};

 const routers = [{
  path: '/',
  name: 'index',
  component: container,
  redirect: {
    name: 'home'
  },
  children: [{
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: '奇新实木家具'
    }
  }, {
    path: '/series-Europe',
    name: 'series-Europe',
    component: series,
    meta: {
      title: '欧风系列',
      kind: 2,
    }
  }, {
    path: '/series-huaxia',
    name: 'series-huaxia',
    component: series,
    meta: {
      title: '艺典华夏系列',
      kind: 0
    }
  }]
}];

const config = {
  mode: 'history',
  //  base: '/dist/',
  base: '/cardTemplates/t3/',
  routes: routers
}
const router = new VueRouter(config);
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
export default router;