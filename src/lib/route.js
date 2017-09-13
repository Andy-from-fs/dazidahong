import VueRouter from 'vue-router';

const home = resolve => {
  require.ensure(['../views/home/home.vue'], () => {
    resolve(require('../views/home/home.vue'));
  });
}
const welcome = resolve => {
  require.ensure(['../views/home/welcome.vue'], () => {
    resolve(require('../views/home/welcome.vue'));
  });
}
const series = resolve => {
  require.ensure(['../views/series/series.vue'], () => {
    resolve(require('../views/series/series.vue'));
  });
}

const routers = [{
  path: '/',
  name: 'index',
  redirect: {
    name: 'welcome'
  },
  children: [{
    path: '/welcome',
    name: 'welcome',
    component: welcome
  }, {
    path: '/home',
    name: 'home',
    component: home,
    meta:{
      title:'奇新实木家具'
    }
  }, {
    path: '/series-Europe',
    name: 'series-Europe',
    component: series,
    meta:{
      title:'欧风系列',
      kind: 2,
    }
  }, {
    path: '/series-huaxia',
    name: 'series-huaxia',
    component: 'series',
    meta:{
      title:'艺典华夏系列',
      kind:0
    }
  }]
}];

const config={
  mode:'history',
  //  base: '/dist/',
   base: '/cardTemplates/t3/',
   routes: routers
}
const route =new VueRouter(config);
route.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});
export default route;
