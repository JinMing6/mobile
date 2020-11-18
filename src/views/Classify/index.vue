<template>
  <div class="classify">
    <TreeSelect 
      v-model:main-active-index="treeSelectState.activeIndex"
      :items="treeSelectState.items"
      height="calc(100vh - 1rem)"
    ></TreeSelect>
  </div>
</template>

<script>
import {reactive} from 'vue'
import { TreeSelect } from "vant";
export default {
  components: { TreeSelect },
  setup() {
    const treeSelectState = reactive({
      activeIndex: 0,
      items: [
        {
          text: '分组0'
        },
        {
          text: '分组1'
        }
      ]
    })
    return {
      treeSelectState
    }
  }
};
</script>

<style></style>
