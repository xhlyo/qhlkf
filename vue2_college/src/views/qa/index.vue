<template>
  <div class="qa-container">
    <van-tabs v-model="active">
      <van-tab title="关注">
          <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
          </van-cell-group>
      </van-tab>
      <van-tab title="推荐">
          <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
          </van-cell-group>
      </van-tab>
      <van-tab title="资源分享">
        <van-cell-group class="mb-4">
            <van-cell title="我要上传文件" value="选择要上传的文件">           
            </van-cell>
            <van-uploader :after-read="afterRead">
              <van-button 
                color="linear-gradient(0, #08aeea, #2af598)"
              >文件上传
              </van-button> 
            </van-uploader> &nbsp; 
            <van-uploader :after-read="afterRead">
              <van-button 
                color="linear-gradient(0, #ff3cac, #784ba0)"                 
              >大件上传
              </van-button> 
            </van-uploader> &nbsp; 
              <van-button 
                color="linear-gradient(to right, #ff6034, #ee0a24)"
                to="/"
              >出错反馈
              </van-button> &nbsp;
              <van-button 
                color="linear-gradient(0, #ff9a8b, #ff6a88)"
                @click="matters"
              >注意事项</van-button>
              <van-cell title="上传提醒" value="大文件请点击大件上传按钮" />
        </van-cell-group>
        <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
        </van-cell-group> 
      </van-tab>
      <van-tab title="热心求助">
          <van-cell-group>
            <van-cell title="单元格" value="内容" />
            <van-cell title="单元格" value="内容" label="描述信息" />
          </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>
  
<script>
import { Toast } from 'vant';


export default {
  name: 'QaIndex',
  components: {},
  props: {},
  data () {
    return {
      active: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    matters() {
      Toast('文件不能大于50M 大文件不能大于2GB');
    }
  }
}
</script>

<style scoped lang="less">
.mb-4 {  // 下边距为 4
    margin-bottom: 4px;
} 
</style>