<template>
  <div class="login-container">
    <div class="user-notice-title">
        <div class="line-box outer-box"></div>
        <div class="line-box inner-box"></div>
        <h2>营商路路通企业开办全流程智能服务一体机使用须知</h2>
    </div>
  </div>
</template>

<script>

export default {
  name:'Login',

}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
$bg:#2d3a4b;
.login-container{
  min-height: 100%;
  width:100%;
  background-color: $bg;
  overflow: hidden;
}

  .home{
    // width:100%;
    // height:100%;
    background: url('~@/assets/index_bg.png') no-repeat center;
    .user-notice-title{
        position: relative;
        width: 1520px;
        height: 134px;
        font-weight: 700;
        text-align: center;
        margin: 0 auto;
        margin-top: 43px;
        color:$white;
        .line-box{
          position: absolute;
          width: 1529px;
          height: 88px;
          border: 2px solid #74aafc;
          border-radius: 6px;
        }
        .outer-box{
          left: -10px;
          top: -10px;
        }
        .inner-box{
          left: 0;
          top: 0;
        }
        h2{
          padding: 12px;
          height: 56px;
          line-height: 56px;
          font-size: 64px;
          background: #004bcb;
          margin: 0 auto;
        }
    }
  }
</style>
