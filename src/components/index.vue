<template>
  <div class="hello">
    <header class="hasManyCity" id="header">
      <div  class="cityBtn">亳州</div>
      <div id="locaitonBtn" class="link-url locaitonBtn"></div>
      <div class="searchBox">
          <span>请输入您想找的商品</span>
      </div>
      <div id="" class="searchBtn">搜索</div>
    </header>
    <div class="swipe-box">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="@/assets/test-img/lunbo1.jpg" alt="" class="swipe-box-img"></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/test-img/lunbo2.jpg" alt="" class="swipe-box-img"></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/test-img/lunbo3.jpg" alt="" class="swipe-box-img"></mt-swipe-item>
        <mt-swipe-item><img src="@/assets/test-img/lunbo4.jpg" alt="" class="swipe-box-img"></mt-swipe-item>
      </mt-swipe>
    </div>

<!--    <swiper :list="demo01_list" v-model="demo01_index" @on-index-change=""></swiper>-->
<!--    <view class="page-section page-section-spacing swiper">-->
<!--      <swiper indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" circular="{{circular}}" vertical="{{vertical}}"-->
<!--              interval="{{interval}}" duration="{{duration}}" previous-margin="{{previousMargin}}px" indicator-active-color="#D5DDF0" next-margin="{{nextMargin}}px">-->
<!--        <block wx:for="{{url}}" wx:key="*this">-->
<!--          <swiper-item>-->
<!--            <img src='{{item}}' class='swiper-item' bindtap='text'></img>-->
<!--          </swiper-item>-->
<!--        </block>-->
<!--      </swiper>-->
<!--    </view>-->

<!--    <view class='classify'>-->
<!--      <view>-->
<!--        <block wx:for="{{postList}}" wx:key="{{}}" wx:for-item="item">-->
<!--          <view class='classify-box' bindtap='classify' id="{{item.type}}" type="5" val="123">-->
<!--            <image src='{{item.url}}' class="img"></image>-->
<!--            <text>{{item.title}}</text>-->
<!--          </view>-->
<!--        </block>-->
<!--      </view>-->
<!--    </view>-->

<!--    <view class='news'>-->
<!--      <view class='news-title'>-->
<!--        <img src='/images/tab/news.png'></img>-->
<!--        <text>新闻头条</text>-->
<!--      </view>-->
<!--      <view class='news-content'>-->
<!--        <view></view>-->
<!--      </view>-->
<!--    </view>-->

<!--    <view class='commodity'>-->
<!--      <block wx:for="{{shoppingData}}" wx:key="{{}}" wx:for-item="item">-->
<!--        <view class='content'id="{{item.id}}" bindtap='commodity'>-->
<!--          <image src='{{item.pic_path}}'></image>-->
<!--          <view class='commodity-content'>{{item.title}}</view>-->
<!--          <view class='price'>￥{{item.price}}<text class='pricewap'>￥{{item.priceWap}}</text><text class='sold'>已售{{item.num}}件</text>-->
<!--          </view>-->
<!--        </view>-->
<!--      </block>-->
<!--    </view>-->
    <view class='foot'>

      <text>没有更多了！</text>
    </view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {
    height: 50px;
    background-color: #f76740;
    position: fixed;
    width: 100%;
    z-index: 99;
    display: -webkit-box;
    top: 0;
  }
  .cityBtn {
    width: 20%;
    height: 100%;
    line-height: 50px;
    text-align: center;
    color: white;
    top: 0;
    left: 0;
    font-size: 14px;
  }
  .cityBtn:after {
    content: "";
    display: inline-block;
    margin-left: 6px;
    width: 8px;
    height: 8px;
    border: 1px solid white;
    border-width: 0 1px 1px 0;
    border-top-width: 0px;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 0px;
    -webkit-transform: rotate(45deg);
    margin-top: 18px;
    vertical-align: top;
  }

  .hasManyCity .searchBox {
    position: absolute;
    left: 7%;
    width: 60%;
    top: 0;
  }

  .searchBox {
    margin: 10px 50px 0;
    background: rgba(17, 88, 81, .11);
    border-radius: 30px;
    height: 30px;
    -webkit-box-sizing: border-box;
    -webkit-box-flex: 1;
  }

  .searchBox span {
    font-size: 14px;
    line-height: 30px;
    margin-left: 5px;
    color: white;
    opacity: .5;
  }
  .searchBtn{
    color: #fff;
    font-size: 13px;
    line-height: 50px;
    position: fixed;
    right: 0;
    width: 20%;
  }

  .swipe-box{
    margin: 0px auto;
    height: 150px;
    width: 96%;
    padding-top: 58px;
  }
  .swipe-box-img{
    height: 100%;
    width: 100%;
    border-radius: 6px;
    overflow: hidden;
  }
</style>
