import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const route = (path, name, redirect = false, beforeEnter) => {
  return {
    path,
    name,
    redirect,
    beforeEnter,
    component: (resolve) => import(`@/pages/${name}.vue`).then(resolve),
  };
};

const routes = [route('/', 'PageMain'), route('/:catchAll(.*)', 'Error404')];

export default new VueRouter({
  mode: 'history',
  routes,
});
