<template>
  <div class="navbar">
    <router-link :to="{name:'Dashboard'}" class="nav-item">
      <img src="" alt="">
      Dashboard
    </router-link>
    <router-link :to="{name:'AddProduct'}" class="nav-item">
      <img src="" alt="">
      Product Management
    </router-link>
    <router-link :to="{name:'Website'}" class="nav-item">
      <img src="" alt="">
      website
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navbar{
      width: 276px;
      height: 100vh;
      background: #efefef;
      padding: 19px 20px;
  }
  .nav-item{
    margin-bottom: 16px;
  }
  .nav-item.router-link-active{
    background: white;
  }
  .nav-item img{
    height: 32px;
    width: 32px;
    border-radius: 50%;
    background: #d9d9d9;
  }
  a{
    display: block;
    color: black
  }
</style>