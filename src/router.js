import Vue from 'vue'
import Router from 'vue-router'
import PostList from './components/PostList.vue'
import Artical from './components/Artical.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components: {
        main: PostList
      }
    },
    {
      name: 'postContent',
      path: '/post_content/:id',
      components: {main: Artical}
    }
  ]
})
