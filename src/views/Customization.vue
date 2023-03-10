<template>
  <div class="customization content">
    <nav-status/>
    <!-- Process -->
    <div class="add-product-process">
      <div>
          Cancel
      </div>
      <div>
          Save
      </div>
    </div>
    <!-- Setting -->
    <div class="customize-setting">
        <div class="title">
            Settings
            <img src="../assets/images/widgets/ask.png" class="product-list-ask" alt="">
        </div>
        <div class="setting-content">
          <div class="setting-config">
            <div class="config-type">
              <div>
                <img src="../assets/images/widgets/ask.png" class="product-list-ask" alt="">
                <span>General Configuration</span> 
              </div>
              <div class="config-content">
                <div class="config-text">
                  <div>Widget Title</div>
                  <input type="text" name="" id="">
                </div>
              </div>
            </div>
          </div>
          <!-- Preview -->
          <div class="preview">
            <img src="../assets/images/widgets/ask.png" class="product-list-ask" alt=""> Preview
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import NavStatus from '../components/NavStatus.vue'
export default {
  components: { NavStatus },

}
</script>

<style>
  .customize-setting{
    width: 100%;
  }
  .customize-setting .title{
      margin: 28px 0 0 35px;
      font-weight: 600;
      font-size: 20px;
  }
  .setting-content{
    display: flex;
  }
  .setting-content>div{
    width: 50%;
    margin: 37px 29px;
  }
</style>