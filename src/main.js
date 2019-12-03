import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo, {
  container: "body",
  duration: 1500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})