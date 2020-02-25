<template>
  <div style="position: fixed;bottom: 0;width: 100%">
  <mt-tabbar >
    <mt-tab-item id="首页" href="/">
      <img slot="icon" src="@/assets/img/home-page.png" v-show="!home" >
      <img slot="icon" src="@/assets/img/home-page-select.png" v-show="home">
      <span :style="home?'color:#38a6e0':''">首页</span>
    </mt-tab-item>
    <mt-tab-item id="会员" href="../member">
      <img slot="icon" src="@/assets/img/member.png" v-show="!member" >
      <img slot="icon" src="@/assets/img/member-select.png" v-show="member">
       <span :style="member?'color:#38a6e0':''">会员商品</span>
    </mt-tab-item>
    <mt-tab-item id="购物车" href="../shopCar">
      <img slot="icon" src="@/assets/img/shpping-car.png" v-show="!shpping">
      <img slot="icon" src="@/assets/img/shpping-car-select.png" v-show="shpping">
       <span :style="shpping?'color:#38a6e0':''">购物车</span>
    </mt-tab-item>
    <mt-tab-item id="我的" href="../myCenter">
      <img slot="icon" src="@/assets/img/my.png" v-show="!my" >
      <img slot="icon" src="@/assets/img/my-select.png" v-show="my">
       <span :style="my?'color:#38a6e0':''">我的</span>
    </mt-tab-item>
  </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: "tabBar",
    data() {
      return {
        select: '首页'
      }
    },
    props: {
      home: Boolean,
      member: Boolean,
      shpping: Boolean,
      my: Boolean,
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style scoped>
  div >>>.mint-tab-item-label {
    color: inherit;
    font-size: 12px;
    line-height: 1;
    color: #848484;
  }
  div >>>.mint-tabbar {
    border-top: 1px solid #ddd;
    background-color: #ffffff;
  }
</style>
