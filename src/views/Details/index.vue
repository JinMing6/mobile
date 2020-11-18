<template>
  <div class="details">details</div>
</template>

<script>
import {onBeforeMount} from 'vue'
import {useRoute} from 'vue-router'
export default {
  setup() {
    const routeInfo = useRoute()
    onBeforeMount(() => {
      let startIndex = routeInfo.path.indexOf('s/') + 2;
      let id = routeInfo.path.slice(startIndex)
      console.log(id)
    })
  }
}
</script>

<style>

</style>