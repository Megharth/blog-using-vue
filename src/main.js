// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueMaterial)
Vue.use(VueResource)
Vue.use(VueRouter)
//custom directives

Vue.directive('rainbow',{
  bind(el, binding, vnode) {
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
});

//filters

Vue.filter('uppercase', function(value){
  return value.toUpperCase();
});
Vue.config.productionTip = false

//router

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router: router
})
