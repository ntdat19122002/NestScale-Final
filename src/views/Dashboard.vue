<template>
  <div class="content">
    <div class="welcome">WELCOME, CHLOE NGUYEN!</div>
    <div class="product-list">
      <!-- Header -->
      <div class="product-list-header product-list-row">
        <div class="check-box">
          #
        </div>
        <div class="image">Widget Title</div>
        <div class="name">Widget Description</div>
        <div class="price">Products included</div>
        <div class="compare">Total Price</div>
        <div class="stock">Status</div>
      </div>
      <!-- item -->
      <div class="product-list-item-wrapper">
        <div class="product-list-item product-list-row" v-for="n in 20" :key="n">
          <div class="check-box">
            {{n}}
          </div>
          <div class="image">
            You May Also Like...
          </div>
          <div class="name">Good deals only for you!</div>
          <div class="price">3</div>
          <div class="compare">$100.05</div>
          <div class="stock">100</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.welcome {
  margin: 51px 57px;
  font-weight: 600;
  font-size: 27px;
}
.product-list{
  margin: 30px 50px;
}
</style>