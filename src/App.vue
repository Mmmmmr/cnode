<template>
  <div id="app" >
    <Header></Header>
    <router-view name="main"></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
.main{
  width: 80%;
  margin: 0 auto;
}
</style>
