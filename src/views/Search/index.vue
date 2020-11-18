<template>
  <div class="searchPage">
    <!-- 搜索框 -->
    <header class="searchHeader">
      <Search 
        v-model="keyWords"
        @search="handleSearch"
        @focus="handleFocus"
      ></Search>
    </header>
    <!-- 搜索推荐 -->
    <main class="searchMain" @click="handleCloseUl">
      <ul 
        :class="{
          mainUl: !isShow,
          mainUlActive: isShow
        }"
      >
        <li 
          v-for="item in recommendList"
          :key="item"
          class="mainLi" 
          :style="{backgroundColor: randomColor()}"
        >{{item}}</li>
      </ul>
    </main>
  </div>
</template>

<script>
import {ref} from 'vue'
import {Search} from 'vant'
export default {
  components: {Search},
  setup() {
    /* 搜索框 */
    //关键词
    const keyWords = ref('')
    // 进行搜索
    const handleSearch = () => {
      console.log(keyWords.value)
    }
    const randomColor = () => {
      return `rgba(${parseInt(Math.random() * 256)}, ${parseInt(Math.random() * 256)}, ${parseInt(Math.random() * 256)}, 0.4)`
    }

    /* 搜索推荐 */
    const isShow = ref(false)
    // 推荐列表
    const recommendList = ref([0, 1, 2, 3, 4, 5, 6, 7])
    // 展开搜索推荐
    const handleFocus = () => {
      isShow.value = true;
    }
    // 关闭搜索推荐
    const handleCloseUl = (event) => {
      let {className} = event.target
      if(className === 'searchMain') {
        isShow.value = false
      }
    }
    return {
      keyWords,
      handleSearch,
      randomColor,
      isShow,
      recommendList,
      handleFocus,
      handleCloseUl
    }
  }
}
</script>

<style lang="scss" scoped>
  .searchPage {
    .searchMain {
      height: calc(100vh - 1.54rem);
      .mainUl, .mainUlActive {
        .mainLi {
          height: 0.4rem;
          text-align: center;
          line-height: 0.4rem;
        }
      }
      .mainUl {
        transition: 0.6s;
        opacity: 0;
      }
      .mainUlActive {
        transition: 0.6s;
        opacity: 1;
      }
    }
  }
</style>