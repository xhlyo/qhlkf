<template>
  <div class="shop-container">
    <van-nav-bar
      class="app-nav-bar"
      title="积分商城"
      left-arrow
      @click-left="$router.back()"
    />
    <van-cell-group>
        <van-nav-bar 
          title="积分兑换" 
          right-text="更多" 
          right-arrow>
        </van-nav-bar>
    </van-cell-group>
    <van-grid class="shop-grid mb-4" :column-num="3">
        <van-grid-item 
          class="nav-grid-item"
          icon-prefix="Guali"
          icon="shoucang"
          to="/my/keep"
          text="赚积分" />
        <van-grid-item 
          class="nav-grid-item"
          icon-prefix="Guali"
          icon="lishi"
          to="/history" 
          text="111" 
        />
        <van-grid-item 
          class="nav-grid-item"
          icon-prefix="Guali"
          icon="shangcheng"
          to="/shop" 
          text="111" 
        />        
    </van-grid>
    <van-card
      num="2"
      tag="标签"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      origin-price="10.00"
    >
    </van-card>

  </div>  
</template>

<script>
export default {
  name: 'My_shop',
  components: {}, 
  props: {}, 
  data () {
    return {
        
    }
  }, 
  computed: {}, 
  watch: {}, 
  created () {}, 
  mounted () {}, 
  methods: {}, 
}
</script>

<style scoped lang="less">
.shop-container {
  
  .my-swipe .van-swipe-item {
    padding-top: 15px;
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: green;
  }
  .shop-grid {
    padding-top: 10px;
  }
}
  .mb-4 {  // 下边距为 4
    margin-bottom: 4px;
  }
</style>