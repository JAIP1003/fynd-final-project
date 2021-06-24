<template>
  <div id="app">
    <app-navbar></app-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar';
import store from '@/store/index';

export default {
  name: 'App',
  components: {
    AppNavbar
  },
  mounted() {
    store.commit( 'updateCartFromLocalStorage' );
  }
}
</script>

<style scoped>

html, body{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

body{
  background-color: rgb(245, 245, 245);
}
</style>>


