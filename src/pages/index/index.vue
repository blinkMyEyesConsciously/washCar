<template>
  <div>
    <div class="my-header">
      <div class="hint">
        <div>次卡套餐剩余</div>
        <div style="font-size: 24px">1</div>
        <div>次</div>
      </div>
      <div class="hint">
        <div>会员剩余</div>
        <div style="font-size: 24px">15</div>
        <div>天</div>
      </div>

    </div>
    <swiper
      class="swiper"
      :indicator-dots="true"
      :autoplay="true"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item :key="item" v-for="item  in imgUrls">
        <image :src="item" class="slide-image"></image>
      </swiper-item>

    </swiper>
    <div class="bottom">

    </div>
  </div>
</template>

<script>

  import {userDels} from 'netWork'

  export default {
    data() {
      return {
        imgUrls: [
          'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
        ],
        autoplay: false,
        interval: 5000,
        duration: 1000,
        indicatorDots: false,
        motto: 'Hello miniprograme',
        userInfo: {
          nickName: 'mpvue',
          avatarUrl: 'http://mpvue.com/assets/logo.png'
        }
      }
    },

    components: {},

    methods: {},

    created() {
      // let app = getApp()
    }
  }
</script>

<style lang="less">
  page {
    height: 100vh;
    background: linear-gradient(#2266e1, #1d2fb9);
  }

  .my-header {
    height: 20vh;

    .hint {
      margin-top: ~'20rpx';
      margin-left: ~'50rpx';
      display: flex;
      color: #ffffff;
      height: 24px;
      line-height: 24px
    }
  }

  .slide-image {
    height: 100%;
    width: 100%;

  }

  .swiper {
    height: 35vh;
  }

  .bottom {

    width: ~'700rpx';
    height: 32vh;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    margin-right: ~'25rpx';
    margin-left: ~'25rpx';
    border-radius: ~'25rpx' ~'25rpx' 0 0;
  }
</style>
