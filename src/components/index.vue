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


    <div class='classify'>
      <div>
        <span v-for="item in postList" :key="index">
          <div class='classify-box' bindtap='classify' >
            <img :src='item.url' class="img">
            <span>{{item.title}}</span>
          </div>
        </span>
      </div>
    </div>

<!--    <div class='news'>-->
<!--      <div class='news-title'>-->
<!--        <img src='/imgs/tab/news.png'></img>-->
<!--        <text>新闻头条</text>-->
<!--      </div>-->
<!--      <div class='news-content'>-->
<!--        <div></div>-->
<!--      </div>-->
<!--    </div>-->

<!--    <div class='commodity'>-->
<!--      <block wx:for="{{shoppingData}}" wx:key="{{}}" wx:for-item="item">-->
<!--        <div class='content'id="{{item.id}}" bindtap='commodity'>-->
<!--          <img src='{{item.pic_path}}'></img>-->
<!--          <div class='commodity-content'>{{item.title}}</div>-->
<!--          <div class='price'>￥{{item.price}}<text class='pricewap'>￥{{item.priceWap}}</text><text class='sold'>已售{{item.num}}件</text>-->
<!--          </div>-->
<!--        </div>-->
<!--      </block>-->
<!--    </div>-->
    <div class='foot'>

      <text>没有更多了！</text>
    </div>
  </div>
</template>

<script>
  import fruits from '@/assets/img/fruits.png'
  import compute from '@/assets/img/compute.png'
  import medical from '@/assets/img/medical.png'
  import womenWear from '@/assets/img/womenWear.png'
  import menWear from '@/assets/img/menWear.png'
  import phone from '@/assets/img/phone.png'
  import toy from '@/assets/img/toy.png'
  import infant from '@/assets/img/infant.png'
export default {
  name: 'HelloWorld',
  data () {
    return {
      postList:[
        {"url":fruits,"title":"水果","type":"5"},
        {"url":compute,"title":"电脑","type":"4"},
        {"url":medical,"title":"医疗","type":"7"},
        {"url":womenWear,"title":"女装","type":"1"},
        {"url":menWear,"title":"男装","type":"6"},
        {"url":phone,"title":"手机","type":"2"},
        {"url":toy,"title":"玩具","type":"8"},
        {"url":infant,"title":"幼儿","type":"9"},
      ]
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


  .classify-box {
    width: 25%;
    display: inline-block;
    text-align: center;
    margin: 8px 0px;
    color: #999;
    font-size: 0.8rem;
  }

  .img {
    height: 2rem;
    margin: 0 25%;
  }

  .classify {
    width: 96%;
    margin: 0 auto;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    margin-top: 9px;
    border-radius: 5px;
  }
</style>
