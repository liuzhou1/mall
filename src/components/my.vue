<template>
  <div class="hello">


    我的
    <tabBar :my="true"></tabBar>
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
