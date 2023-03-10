<template>
    <Header/>
    <div class="wrapper">
        <Navbar/>
        <router-view/>
    </div>
    
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: { Header, Navbar },

}
</script>

<style>
    .wrapper{
        display: flex;
        height: 91vh;
    }
</style>