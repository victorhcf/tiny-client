<template>
  <img alt="Vue logo" src="./assets/logo.png" height="200">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <UrlList />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UrlList from './components/UrlList.vue';

export default {
  name: 'App',
  components: {
    UrlList
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
