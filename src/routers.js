import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeView from './pages/Home.vue'
import EaselJSView from './pages/EaselJS.vue'
import TweenJSView from './pages/TweenJS.vue'
import SoundJSView from './pages/SoundJS.vue'
import PreloadJSView from './pages/PreloadJS.vue'
import DemosView from './pages/Demos.vue'
import ToolsView from './pages/Tools.vue'

const myTitle = 'CreateJS中文网'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: HomeView, name: myTitle },
    { path: '/easeljs', component: EaselJSView , name: 'EaselJS - ' + myTitle},
    { path: '/tweenjs', component: TweenJSView , name: 'TweenJS - ' + myTitle},
    { path: '/soundjs', component: SoundJSView , name: 'SoundJS - ' + myTitle},
    { path: '/preloadjs', component: PreloadJSView , name: 'PreloadJS - ' + myTitle},
    { path: '/demos', component: DemosView , name: 'Demos - ' + myTitle},
    { path: '/tools', component: ToolsView , name: 'Tools - ' + myTitle}
    // { path: '*', redirect: '/top' }
  ]
})
