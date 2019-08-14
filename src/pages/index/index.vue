<template>

    <div>
        <div class="headerVessel"></div>
        <swiper
                :autoplay="true"
                :duration="duration"
                :indicator-dots="true"
                :interval="interval"
                class="swiper"
        >

            <swiper-item :key="item" v-for="item  in imgUrls">
                <image :src="item" class="slide-image"></image>
            </swiper-item>

        </swiper>

        <div class="bottom2">
            <div class="handle">
                <div class="money">天天领现金</div>
                <div class="pay"> 充值</div>

            </div>
            <div class="camera">扫码洗车</div>
        </div>

    </div>


</template>

<script>

  import card from '@/components/card'

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
	beforeMount () {

	  // wx.cloud.callFunction({
	  // // 云函数名称
	  // name: 'user',
	  // // 传给云函数的参数
	  //
	  // success: function(res) {
	  //   console.log(res) // 3
	  // },
	  // fail: console.error
	  // })
	},

	methods: {
	  bindgetuserinfo2 (e) {
		console.log(123)
		console.log(e)
	  },

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

<style  lang="less">
    page {
        height: 100%;
        background-color: #214dc6;
    }

    .headerVessel {
        background-color: #2266e1;
        height: ~"260rpx";


    }


    .swiper {
        background: linear-gradient(#2266e1, #214dc6);
        height: ~'360rpx';

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
        display:flex;
        flex-direction:column;
        align-items:center;
        .handle{
            margin-top:~"100rpx";
            width:~'600rpx';
            display: flex;

            justify-content:space-between;
            .money{

                width:~'270rpx';
                height:~'80rpx';
                background-color:#f86c0b;
                text-align:center;
                line-height:~'80rpx';
                border-radius:~'12rpx';
                color:#ffffff;
            }
            .pay{
                width:~'270rpx';
                height:~'80rpx';
                background-color:#fdda06;
                text-align:center;
                line-height:~'80rpx';
                border-radius:~'12rpx';

            }

        }
        .camera{

            width:~'600rpx';
            height:~'120rpx';
            background-color:#2375e3;
            text-align:center;
            line-height:~'120rpx';
            border-radius:~'12rpx';
            margin-top:~'80rpx';
            font-size:~'40rpx';
            color:#ffffff;

        }

    }
</style>
