<template>
  <div class="grid_box">
      <div class="grid_item" v-for="item in gridState.list" :key="item">
          <img src="@/assets/imgs/gridBox0.png" alt="" class="grid_item_img">
      </div>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
    setup() {
        const gridState = reactive({
            list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        })
        return {
            gridState
        }
    }
}
</script>

<style lang="scss" scoped>
    .grid_box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .grid_item {
            width: 19%;
            height: 1rem;
            background: red;
            &:nth-child(-n + 3) {
                background: skyblue;
                margin-bottom: 0.04rem;
            }
            .grid_item_img {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>