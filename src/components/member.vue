<template>
  <div class="hello">


    会员商品
    <tabBar :member="true"></tabBar>
  </div>
</template>

<script>
  import tabBar from '@/components/tabBar.vue'
  export default {
    components:{
      tabBar
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
