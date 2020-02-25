<template>
  <div>
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
        <span v-for="(item,index) in postList" :key="index">
          <div class='classify-box' bindtap='classify' >
            <img :src='item.url' class="img">
            <span>{{item.title}}</span>
          </div>
        </span>
      </div>
    </div>

    <div class='news'>
      <div class='news-title'>
        <img src='@/assets/img/news.png'/>
        <span>商品抢购</span>
      </div>
    </div>


    <div class='commodity'>
      <span v-for="(item,index) in shoppingData" :key="index">
        <div class='content' :id="item.id" @click='commodity'>
          <img :src='item.pic_path'>
          <div class='commodity-content'>{{item.title}}</div>
          <div class='price'>￥{{item.price}}<span class='sold'>已售{{item.num}}件</span>
          </div>
        </div>
      </span>
    </div>

    <div class='foot'>
      <img src='@/assets/img/no-commoditie.png' class='no-img'>
      <span>没有更多了！</span>
    </div>

    <tabBar :home="true"></tabBar>
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

  import computer from '@/assets/test-img/computer.jpg'
  import computer1 from '@/assets/test-img/computer1.jpg'
  import computer2 from '@/assets/test-img/computer2.jpg'
  import computer3 from '@/assets/test-img/computer3.jpg'
  import apple from '@/assets/test-img/apple.jpg'

  import tabBar from '@/components/tabBar.vue'
export default {
  components:{
    tabBar
  },
  data () {
    return {
      selected: '0',
      postList:[
        {"url":fruits,"title":"水果","type":"5"},
        {"url":compute,"title":"电脑","type":"4"},
        {"url":medical,"title":"医疗","type":"7"},
        {"url":womenWear,"title":"女装","type":"1"},
        {"url":menWear,"title":"男装","type":"6"},
        {"url":phone,"title":"手机","type":"2"},
        {"url":toy,"title":"玩具","type":"8"},
        {"url":infant,"title":"幼儿","type":"9"},
      ],
      shoppingData:[
        {"id":"11","location":"广东 深圳","nick":"摩天酷旗舰店","num":"12","pic_path":computer,"price":"1798","priceWap":"1398","title":"【正品保证】2018款 金属时尚超极本/背光键盘/送券100元","type":"4","shopInfo":[computer,computer1,computer2,computer3],"hint":["i5游戏本","4G独显"]}
        ,{"id":"11","location":"广东 深圳","nick":"摩天酷旗舰店","num":"12","pic_path":apple,"price":"1798","priceWap":"1398","title":"【正品保证】2018款 金属时尚超极本/背光键盘/送券100元","type":"4","shopInfo":[computer,computer1,computer2,computer3],"hint":["i5游戏本","4G独显"]}
        ,{"id":"11","location":"广东 深圳","nick":"摩天酷旗舰店","num":"12","pic_path":computer,"price":"1798","priceWap":"1398","title":"【正品保证】2018款 金属时尚超极本/背光键盘/送券100元","type":"4","shopInfo":[computer,computer1,computer2,computer3],"hint":["i5游戏本","4G独显"]}
        ,{"id":"11","location":"广东 深圳","nick":"摩天酷旗舰店","num":"12","pic_path":computer,"price":"1798","priceWap":"1398","title":"【正品保证】2018款 金属时尚超极本/背光键盘/送券100元","type":"4","shopInfo":[computer,computer1,computer2,computer3],"hint":["i5游戏本","4G独显"]}
        ,{"id":"11","location":"广东 深圳","nick":"摩天酷旗舰店","num":"12","pic_path":computer,"price":"1798","priceWap":"1398","title":"【正品保证】2018款 金属时尚超极本/背光键盘/送券100元","type":"4","shopInfo":[computer,computer1,computer2,computer3],"hint":["i5游戏本","4G独显"]}
        ,{"id":"11","location":"广东 深圳","nick":"摩天酷旗舰店","num":"12","pic_path":computer,"price":"1798","priceWap":"1398","title":"【正品保证】2018款 金属时尚超极本/背光键盘/送券100元","type":"4","shopInfo":[computer,computer1,computer2,computer3],"hint":["i5游戏本","4G独显"]}
      ],
    }
  },
  methods: {
    commodity(){
      console.log(1)
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
    text-align: center;
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
    margin: 8px auto 0;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    border-radius: 5px;
  }

  .news {
    width: 96%;
    margin: 8px auto 0;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    border-radius: 5px;
    text-align: left;
  }

  .news img {
    width: 1rem;
    height: 1rem;
    margin-left: 1rem;
    margin-right: 5px;
    position: relative;
    top: 2px;
  }

  .news-title {
    margin: 0.5rem 0;
    color: #999;
    font-size: 0.9rem;
  }

  .commodity {
    width: 96%;
    margin: 8px auto 2px;
    border: 1px solid #dcdcdc;
    background-color: #fff;
    border-radius: 5px;
  }

  .content {
    width: 50%;
    display: inline-block;
    margin: 5px 0;
  }

  .commodity-content {
    font-size: 0.7rem;
    width: 96%;
    margin: 0.2rem auto;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    font-size: 1rem;
    color: #f40;
    width: 95%;
    text-align: left;
    margin: 0 auto;
  }

  .pricewap {
    font-size: 0.7rem;
    color: #999;
    text-decoration: line-through;
  }

  .sold {
    font-size: 0.7rem;
    color: #999;
    display: inline-block;
    position: relative;
    float: right;
    top: 7px;
    margin-right: 2%;
  }

  .content>img {
    width: 95%;
    margin-left: 2%;
    height: 10.5rem;
  }

  .no-img{
    width: 3rem;
    height: 1.7rem;
  }
  .foot{
    display: flex;
    align-items:center;
    justify-content:center;
    color: #727171;
    font-size: 0.8rem;
    padding:0.3rem 0;
    margin-bottom: 55px;
  }
</style>
