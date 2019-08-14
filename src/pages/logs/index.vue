<template>

  <div>
    <div class="headerVessel"></div>
    <!--        <swiper-->
    <!--                :autoplay="true"-->
    <!--                :duration="duration"-->
    <!--                :indicator-dots="true"-->
    <!--                :interval="interval"-->
    <!--                class="swiper"-->
    <!--        >-->

    <!--            <swiper-item :key="item" v-for="item  in imgUrls">-->
    <!--                <image :src="item" class="slide-image"></image>-->
    <!--            </swiper-item>-->

    <!--        </swiper>-->
    <map :latitude="Location.latitude"
         :longitude="Location.longitude"
         :show-location="true"

         @controltap="controltap"

         @markertap="markertap"
         @begin="regionchange"
         @end="regionchange"
         @regionchange="regionchange"
         class="map"
         id="map"
         scale="14"
         subkey="AOVBZ-SE3WF-3VGJM-NI6VK-LIPXT-IWBO5">
      <cover-view class="controls">00:00</cover-view>

    </map>
    <van-dialog id="van-dialog"></van-dialog>

  </div>


</template>

<script>

  // import card from 'src/components/card'
  import {throttle} from 'throttle-debounce';

  export default {
    data() {
      return {
        Location: {},
      }
    },

    components: {
      // card
    },

    async mounted() {
      console.log(123)
      this.wx.getLocation(
        {
          type: 'gcj02',
          success: (res) => {
            console.log(789)

            this.Location = {latitude: res.latitude, longitude: res.longitude}
          },
          fail: (res) => {
          }
        })
      this.createMap()


    },
    methods: {
      createMap() {
        console.log(this)
        this.map = this.wx.createMapContext('map', this)
        this.throttle = throttle(1500, this.setLocation);
      },
      regionchange(e) {
        if (e.type === 'end') {
         this.throttle()

        }

      },
      setLocation() {
        this.map.getCenterLocation({
          success: (res) => {
            this.Location = {latitude: res.latitude, longitude: res.longitude}
          }
        })

      },
      markertap(e) {
        console.log(e.markerId)
      },
      controltap(e) {

        console.log(e.controlId)

      },
      bindgetuserinfo2(e) {
        console.log(123)
        console.log(e)
      },

      // async clickHandle (ev) {
      //
      // this.$router.push('/pages/counter/main')
      //
      // }
    },

    created() {
      // let app = getApp()
    }
  }
</script>

<style lang="less">
  page {
    display: flex;
    flex-direction: column;
    background-color: #c66322;
  }

  .headerVessel {
    background-color: #2266e1;
    height: 20vh;


  }

  .map {
    height: 81vh;

    width: ~'750rpx';
  }

  .controls {
    position: relative;
    top: 50%;
    height: 50px;
    margin-top: -25px;
    display: flex;
  }

  .swiper {

    background: linear-gradient(#2266e1, #214dc6);
    height: ~'300rpx';

    .slide-image {
      height: 100%;
      width: 100%;
    }
  }

  .bottom2 {
    position: absolute;
    bottom: 0;
    width: ~"700rpx";
    height: ~"450rpx";
    background-color: #ffffff;
    margin-right: ~"25rpx";
    margin-left: ~"25rpx";
    border-radius: ~"25rpx" ~"25rpx" 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    .handle {
      margin-top: ~"100rpx";
      width: ~'600rpx';
      display: flex;

      justify-content: space-between;

      .money {

        width: ~'270rpx';
        height: ~'80rpx';
        background-color: #f86c0b;
        text-align: center;
        line-height: ~'80rpx';
        border-radius: ~'12rpx';
        color: #ffffff;
      }

      .pay {
        width: ~'270rpx';
        height: ~'80rpx';
        background-color: #fdda06;
        text-align: center;
        line-height: ~'80rpx';
        border-radius: ~'12rpx';

      }

    }

    .camera {

      width: ~'600rpx';
      height: ~'120rpx';
      background-color: #2375e3;
      text-align: center;
      line-height: ~'120rpx';
      border-radius: ~'12rpx';
      margin-top: ~'80rpx';
      font-size: ~'40rpx';
      color: #ffffff;

    }

  }
</style>
