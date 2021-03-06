<template>
  <div class="shop-container">
    <van-nav-bar
      class="app-nav-bar"
      title="积分商城"
      left-arrow
      @click-left="$router.back()"
    />
    <div class="shop_text mb-4">
      <van-cell title="积分兑换"/>
    </div>
    <van-cell 
      is-link 
      @click="RulePopup"
    >积分获得规则</van-cell>
    <van-card
      num="2"
      tag="标签"
      price="3,000"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      origin-price="1,0000"
    >
     <template #footer>
       <van-button size="mini">兑换</van-button>
      </template>
    </van-card>

  </div>  
</template>

<script>
import { Dialog } from 'vant';
export default {
  name: 'My_shop',
  components: {
    [Dialog.Component.name]: Dialog.Component
  },
  props: {}, 
  data () {
    return {    
    }
  }, 
  computed: {}, 
  watch: {}, 
  created () {}, 
  mounted () {}, 
  methods: {
    RulePopup() {
      Dialog.alert({
        message: '坚持签到和发动态,热心回答别人问题都可以获得积分! 还有疑惑没有解决就咨询客服吧'
      }).then(() => {
        // on close
      });
    

    },    
  }, 
}
</script>

<style scoped lang="less">
.shop-container {
  .shop_text {
    text-align: center;
    span {
      color: rgb(197, 66, 132);
      font-size: 20px;
    }
  }
  .shop-grid {
    padding-top: 10px;
  }
}
  .mb-4 {  // 下边距为 4
    margin-bottom: 4px;
  }
</style>