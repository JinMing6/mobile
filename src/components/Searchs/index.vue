<template>
  <div class="searchs">
    <Search 
      disabled
      @click="handleClick"
    ></Search>
  </div>
</template>

<script>
import {Search} from 'vant'
import {useRouter} from 'vue-router'
export default {
  components: {
    Search
  },
  setup() {
    const {push} = useRouter()
    const handleClick = () => {
      push('/search')
    }
    return {
      handleClick
    }
  }
}
</script>

<style>

</style>