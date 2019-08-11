<template>
    <div>

        <swiper
                class="swiper"
                :indicator-dots="true"
                :autoplay="true"
                :interval="interval"
                :duration="duration"
        >

                <swiper-item  :key="item" v-for="item  in imgUrls">
                    <image :src="item" class="slide-image"   ></image>
                </swiper-item>

        </swiper>
        <div class="bottom">

        </div>
    </div>
</template>

<script>

  import card from '@/components/card'
  import { userDels } from 'netWork'

  export default {
	data () {
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

	components: {
	  card
	},

	methods: {
	  bindViewTap () {
	  },
	  async clickHandle (ev) {
		this.$router.push('/pages/counter/main')


	  }
	},

	created () {
	  // let app = getApp()
	}
  }
</script>

<style scoped>


    .slide-image{
        height:100%;
        width: 100%;

    }

    .swiper{
        margin-top: 200rpx;
        height: 360rpx;
    }

    .bottom{

        width: 700rpx;
        height: 350rpx;
        background-color: #1989fa;
        position: absolute ;
        bottom: 0;
        margin-right: 25rpx;
        margin-left: 25rpx;
        border-radius: 25rpx 25rpx 0 0;
    }
</style>
