import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';


import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

// 1. Define route components.
// These can be imported from other files
import AvatarPage from './components/AvatarPage.vue'
import HelloWorldPage from './components/HelloWorldPage.vue'
import CommentPage from './components/CommentPage.vue'


// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/avatar/:name', component: AvatarPage },
  { path: '/comments', component: CommentPage },
  { path: '/', component: HelloWorldPage },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})





new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
