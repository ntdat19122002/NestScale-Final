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
            Settings     <img src="../assets/images/widgets/ask.png" class="product-list-ask" alt="">
        </div>
        <div class="setting-content">
          <div class="setting-config">
            <div class="config">
              <div class="config-title">
                <img src="../assets/images/widgets/ask.png" class="product-list-ask" alt="">
                General Configuration
              </div>
              <div class="config-content">
                <div class="config-text">
                  <div>Widget Title</div>
                  <input type="text" name="" id="">
                </div>
                <div class="flex">
                  <div class="choose-color">
                    <div class="choose-color-title">
                      Title Color
                    </div>
                  </div>
                  <div class="choose-fontsize">
                    <div class="choose-fontsize-title">
                      Font Size
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="config">
              <div class="config-title">
                <img src="../assets/images/widgets/ask.png" class="product-list-ask" alt="">
                <div>
                  General Configuration
                </div>
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
            <img src="../assets/images/widgets/ask.png" class="product-list-ask" alt="">
            <div>
              Preview
            </div>
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
    margin: 29px;
  }
  .config-title, .preview{
    display: flex;
    align-items: center;
  }
  .config-title img, .preview img{
    margin-right: 10px;
  }

  .config-content{
    padding: 26px;
  }

  .config-text>div{
    margin-bottom: 9px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
  .config-text>input{
    width: 80%;
    margin-bottom: 18px;
  }
</style>