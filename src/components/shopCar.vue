<template>
  <div class="container">

    <div class="title">
      <span class='car'>购物车(15)</span>
      <span class='management' @click='management'>管理</span>
    </div>
    <!--<div class='content'>
      <div class="group" bindchange="checkboxChange">
        <div class="contents" v-for="(item,index) in shopCaRData">
          <div class='contents-select'>
            <checkbox :value='item.id' :checked="item.data.checked"></checkbox>
            <div class="label-1__icon">
              <div class="label-1__icon-checked" :style="item.data.checked ? 'opacity:1': 0"></div>
            </div>
          </div>
          <div class='commoditie-box'>
            <div class='left'>
              <img :src='item.data.pic_path'>
            </div>
            <div class='right'>
              <div class="titles"> {{item.data.title}}</div>
              <div class='piece'>
                <span>￥{{item.data.priceWap}}</span>
                <div class='num'>
                  <span style='border-radius: 3px 0 0 3px;' :id='index' bindtap='lessen'>-</span>
                  <input type='number' :value='item.data.pieceNums' name='piece' :id='index' bindblur="changeVal" />
                  <span style='border-radius: 0 3px 3px 0;' :id='index' bindtap='add'>+</span>
                </div>
              </div>
              <div class=''>{{item.data.nick}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>-->

    <van-submit-bar
      :price="price"
      button-text="提交订单"
      @submit="onClickButton"
    >
      <van-checkbox :value="checked" checked-color="#ff8917" v-on:click="onChange" >
        全选
      </van-checkbox>
    </van-submit-bar>
    <tabBar :shpping="true"></tabBar>
  </div>
</template>

<script>
  import tabBar from '@/components/tabBar.vue'

  import computer from '@/assets/test-img/computer.jpg'
  import computer1 from '@/assets/test-img/computer1.jpg'
  import computer2 from '@/assets/test-img/computer2.jpg'
  import computer3 from '@/assets/test-img/computer3.jpg'
  import apple from '@/assets/test-img/apple.jpg'
  export default {
    components:{
      tabBar
    },
    data () {
      return {
        price: 1000,
        checked: true,
        shopCaRData:[
          {"id":"11","location":"广东 深圳","nick":"摩天酷旗舰店","num":"12","pic_path":computer,"price":"1798","priceWap":"1398","title":"【正品保证】2018款 金属时尚超极本/背光键盘/送券100元","type":"4","shopInfo":[computer,computer1,computer2,computer3],"hint":["i5游戏本","4G独显"]}
          ,{"id":"11","location":"广东 深圳","nick":"摩天酷旗舰店","num":"12","pic_path":apple,"price":"1798","priceWap":"1398","title":"【正品保证】2018款 金属时尚超极本/背光键盘/送券100元","type":"4","shopInfo":[computer,computer1,computer2,computer3],"hint":["i5游戏本","4G独显"]}
          ,{"id":"11","location":"广东 深圳","nick":"摩天酷旗舰店","num":"12","pic_path":computer,"price":"1798","priceWap":"1398","title":"【正品保证】2018款 金属时尚超极本/背光键盘/送券100元","type":"4","shopInfo":[computer,computer1,computer2,computer3],"hint":["i5游戏本","4G独显"]}
          ,{"id":"11","location":"广东 深圳","nick":"摩天酷旗舰店","num":"12","pic_path":computer,"price":"1798","priceWap":"1398","title":"【正品保证】2018款 金属时尚超极本/背光键盘/送券100元","type":"4","shopInfo":[computer,computer1,computer2,computer3],"hint":["i5游戏本","4G独显"]}
          ,{"id":"11","location":"广东 深圳","nick":"摩天酷旗舰店","num":"12","pic_path":computer,"price":"1798","priceWap":"1398","title":"【正品保证】2018款 金属时尚超极本/背光键盘/送券100元","type":"4","shopInfo":[computer,computer1,computer2,computer3],"hint":["i5游戏本","4G独显"]}
          ,{"id":"11","location":"广东 深圳","nick":"摩天酷旗舰店","num":"12","pic_path":computer,"price":"1798","priceWap":"1398","title":"【正品保证】2018款 金属时尚超极本/背光键盘/送券100元","type":"4","shopInfo":[computer,computer1,computer2,computer3],"hint":["i5游戏本","4G独显"]}
        ],
      }
    },
    methods:{
      onClickButton(){
        console.log(113)
      },
      onChange(){
        this.checked = !this.checked
      },
      management(){
        this.checked = !this.checked
      }
    }
  }
</script>

<style scoped>
  .container >>> .van-submit-bar{
    bottom: 56px;
  }
</style>
