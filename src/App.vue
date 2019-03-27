<template>
  <div id="app">
    <Header></Header>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import PostList from './components/PostList'

export default {
  name: 'App',
  components: {
    Header,
    PostList
  }
}
</script>

<style>
</style>
