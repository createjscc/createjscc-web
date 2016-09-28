import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './routers'

Vue.use(ElementUI)

const app = new Vue({
  el: '#app',
  router,
  render: h=> h(App)
})

router.afterEach(function (transition) {
  if (transition.name) {
    document.title = transition.name;
    console.log(transition);
  }

});

export { app, router }
