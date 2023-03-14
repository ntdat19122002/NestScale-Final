<template>
  <div class="content add-product">
    <!-- Nav -->
    <NavStatus/>

    <!-- Process -->
    <div class="add-product-process">
      <div>
        <div v-if="isLoading">
          Cancel
        </div>
      </div>
      <div>
        <div v-if="isLoading">
          Save
        </div>
      </div>
    </div>
    
    <!-- Enable Widget -->
    <div class="enable-widget">
      Enable Widget
      <div class="button-toggle">

      </div>
    </div>

    <!-- Product List -->
    <div class="product-list-wrapper">
      <div class="product-list-table">
        <div class="big-title">
          Manual Recommendation
          <img src="../assets/images/widgets/ask.png" class="product-list-ask" alt="">
        </div>
        <div class="title">
          <img src="../assets/images/widgets/ask.png" class="product-list-ask" alt=""> Choose recommendation product(s)
        </div>
        <div class="search-product">
          <input type="text" placeholder="Search product by name ">
        </div>

        <!-- Product list content -->
        <div class="product-list">
          <!-- Header -->
          <div class="product-list-header product-list-row">
            <div class="check-box">
              <input @change="toggleCheckbox" v-model="check_all" type="checkbox">
            </div>
            <div class="image">
              Image
            </div>
            <div class="name">
              Product Name
            </div>
            <div class="price">
              Price
            </div>
            <div class="compare">
              Compare At Price
            </div>
            <div class="stock">
              In Stock
            </div>
          </div>
          <!-- item -->
          <div class="product-list-item-wrapper">
            <div class="product-list-item product-list-row" v-for="n in 20" :key="n">
              <div class="check-box">
                <input class="checkbox-item" type="checkbox">
              </div>
              <div class="image">
                <img src="../assets/images/widgets/product.png" alt="">
              </div>
              <div class="name">
                Boho Bangle Bracelet
              </div>
              <div class="price">
                $123.45
              </div>
              <div class="compare">
                $100.05
              </div>
              <div class="stock">
                100
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Product List exclude -->
    <div class="product-list-wrapper">
      <div class="product-list-table">
        <div class="title">
          <img src="../assets/images/widgets/ask.png" class="product-list-ask" alt=""> Choose excluded product(s)
        </div>
        <div class="search-product">
          <input type="text" placeholder="Search product by name ">
        </div>

        <!-- Product list content -->
        <div class="product-list">
          <!-- Header -->
          <div class="product-list-header product-list-row">
            <div class="check-box">
              <input type="checkbox">
            </div>
            <div class="image">
              Image
            </div>
            <div class="name">
              Product Name
            </div>
            <div class="price">
              Price
            </div>
            <div class="compare">
              Compare At Price
            </div>
            <div class="stock">
              In Stock
            </div>
          </div>

          <!-- Item -->
          <div class="product-list-item-wrapper">
            <div class="product-list-item product-list-row" v-for="n in 20" :key="n">
              <div class="check-box">
                <input type="checkbox">
              </div>
              <div class="image">
                <img src="../assets/images/widgets/product.png" alt="">
              </div>
              <div class="name">
                Product Name
              </div>
              <div class="price">
                Price
              </div>
              <div class="compare">
                Compare At Price
              </div>
              <div class="stock">
                In Stock
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import NavStatus from '../components/NavStatus.vue';
export default {
  components: { NavStatus },
  setup(){
    const isLoading = ref(true);
    const check_all = ref(false)

    const toggleCheckbox = () => {
      console.log(document.getElementsByClassName('checkbox-item')[0].value);
      for(const check_item of document.getElementsByClassName('checkbox-item')){
        check_item.checked = check_all.value
      }

    }

    return {isLoading, check_all,toggleCheckbox}
  }
}
</script>

<style>
  /* Process */
  .add-product-process{
    display: flex;
    float: right;
    margin: 11px 30px 0;
  }

  .add-product-process>div{
    width: 62px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;
    background: #E2E2E2;
    border-radius: 4px;
    font-weight: 500;
    line-height: 24px;
  }
  .add-product-process div:nth-child(2){
    font-weight: 700;
  }

  /* Enable widget */
  .enable-widget{
    margin: 46px 34px 0;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    display: flex;
  }
  .button-toggle{
    margin-left: 28px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1px 2px;

    width: 53px;
    height: 22px;

    background: #BFBFBF;
    border-radius: 16px;
  }
  

  .product-list-wrapper{
    margin: 14px 20px;
  }
  .product-list-table{
    border: 1px solid #E2E2E2;
  }
  .product-list-wrapper .big-title{
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
  }

  .product-list-ask{
    width: 12px;
    height: 12px;
  }

  .product-list-wrapper .title{
    margin: 16px 0 4px 15px;
  }

  /* Search */
  .search-product{
    margin: 0 23px 20px 20px;
  }

  .search-product input{
    width: 100%;
    height: 40px;
    padding-left: 38px;
  }

  /* Product List */
  .product-list{
    margin: 0 20px 10px;
    line-height: 34px;
    border-bottom: 1px solid #E2E2E2;
  }

  .product-list-row{
    width: 100%;
    display: flex;
    border-top: 1px solid #E2E2E2;
  }

  .product-list-header{
    font-weight: 700;
    border-bottom: 1px solid #E2E2E2;
  }
  .product-list-item-wrapper{
    height: 174px;
    overflow-y: scroll;
  }
  .product-list-item div{
    font-weight: 400;
    color: #D9D9D9;
  }
  .product-list .check-box{
    width: 5%;
  }
  .product-list .image{
    width: 10%;
  }
  .product-list .image img{
    margin-left: 15px;
  }
  .product-list .name{
    width: 40%;
  }
  .product-list .price{
    width: 15%;
  }
  .product-list .compare{
    width: 15%;
  }
  .product-list .stock{
    width: 15%;
  }

</style>