<template>
  <div class="search-container">
    <!-- 搜索栏 -->
    <!--
      Tips: 在 van-search 外层增加 form 标签 , 且 action 不为空 , 即可在 iOS 输入法中显示搜索按钮
     -->
    <form>
      <van-search
          v-model="searchText"
          placeholder="请输入搜索关键词"
          show-action
          @search="onSearch"
          @cancel="$router.back()"
          @focus="isResultShow = false"
      />
    </form>
    <!-- / 搜索栏 -->

    <!-- 搜索结果 -->
    <search-result
      v-if="isResultShow"
    />
    <!-- / 搜索结果 -->

    <!-- 联想建议 -->
    <search-suggestion
      v-else-if="searchText"
    />
    <!-- / 联想建议 -->

    <!-- 历史记录 -->
    <search-history
      v-else
    />
    <!-- / 历史记录 -->    
  </div>
</template>

<script>
import SearchSuggestion from './components/search-suggestion'
import SearchHistory from './components/search-history'
import SearchResult from './components/search-result'

export default {
 name: 'SearchIndex',
  components: {
    SearchSuggestion,
    SearchHistory,
    SearchResult
  },
  props: {},
 
  data () {
    return {
      searchText: '', // 搜索输入框的内容
      isResultShow: false, // 控制搜索结果的显示状态

    }
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    onSearch () {
      console.log('on search')

      // 展示搜索结果
      this.isResultShow = true
    },
    onCancel () {
      console.log('取消')
    } 
  }
}
</script>

<style scoped lang="less">
    
</style>

