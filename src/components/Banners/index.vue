<template>
  <div class="bannerBox">
    <Swipe class="banner">
      <SwipeItem 
        v-for="item in swipeList.list"
        class="bannerItem"
        :key="item.id"
        @click="handleClick(item)"
      >{{item.title}}</SwipeItem>
    </Swipe>
  </div>
</template>

<script>
import {reactive} from 'vue'
import {Swipe, SwipeItem} from 'vant'
import {useRouter} from 'vue-router'
export default {
  components: {Swipe, SwipeItem},
  setup() {
    const {push} = useRouter()
    // 轮播列表
    const swipeList = reactive({
      list: [
        {
          id: 0,
          title: '轮播0'
        },
        {
          id: 1,
          title: '轮播1'
        },
        {
          id: 2,
          title: '轮播2'
        }
      ]
    })
    // 轮播详情
    const handleClick = (item) => {
      push(`/details/${item.id}`)
    }
    return {
      swipeList,
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
  .bannerBox {
    .banner {
      height: 2rem;
      .bannerItem {
        color: #fff;
        font-size: 20px;
        line-height: 2rem;
        text-align: center;
        background-color: #39a9ed;
      }
    }
  }
</style>