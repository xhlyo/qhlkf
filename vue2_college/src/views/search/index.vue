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
          @search="onSearch(searchText)"
          @cancel="$router.back()"
          @focus="isResultShow = false"
      />
    </form>
    <!-- / 搜索栏 -->

    <!-- 搜索结果 -->
    <search-result
      v-if="isResultShow"
      :search-text="searchText"
    />
    <!-- / 搜索结果 -->

    <!-- 联想建议 -->
    <search-suggestion
      v-else-if="searchText"
      :search-text="searchText"
      @search="onSearch"
    />
    <!-- / 联想建议 -->

    <!-- 历史记录 -->
    <search-history
      v-else
      :search-histories="searchHistories"
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
      searchHistories: [] // 搜索历史数据
    }
  },
  computed: {},
  watch: {
    // 监视搜索历史记录的变化  , 存储到本地存储  
    // searchHistories () {
      
    // }
  },
  created () {},
  mounted () {},
  methods: {
    onSearch (searchText) {
      // 把输入框设置为你要搜索的文本
      this.searchText = searchText

      const index = this.searchHistories.indexOf(searchText)  // 找到 索引
      if (index !== -1) {
        // 把重复项删除
        this.searchHistories.splice(index, 1)
      }
      // 把最新的搜索历史记录放到顶部
      this.searchHistories.unshift(searchText)

      // 展示搜索结果
      this.isResultShow = true
    },
  }
}
</script>

<style scoped lang="less">
    
</style>

