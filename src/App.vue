<template>
  <div id="mApp">
    <Navbars />
    <main class="mainClass">
      <router-view></router-view>
    </main>
    <Tabbars />
  </div>
</template>

<script>
import Navbars from '@/components/Navbars'
import Tabbars from '@/components/Tabbars'
export default {
  name: 'App',
  components: {
    Navbars,
    Tabbars
  },
  //方法
  methods: {
    handleOne() {
      
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/styles/mApp.scss';
</style>
