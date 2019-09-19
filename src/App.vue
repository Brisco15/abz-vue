<template>
  <div id="app">
    <Header></Header>
    <Page></Page>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Page from './components/Page.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'app',
  components: {
    Header,
    Page,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  
  
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html, body{
  min-width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;

}
</style>
