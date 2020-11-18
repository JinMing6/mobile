<template>
  <div class="home">
    <!-- 搜索框 -->
    <Searchs></Searchs>
    <!-- 轮播 -->
    <Banners></Banners>
    <DividerLine />
    <!-- 宫格 -->
    <Grids></Grids>
    <DividerLine />
    <!-- 展示图 -->
    <div class="showImg">
      <div class="showImgLeft">左</div>
      <div class="showImgRightTop">右_上</div>
      <div class="showImgRightBot">右_下</div>
    </div>
    <DividerLine />
    <!-- 广告位0 -->
    <Advertising />
    <DividerLine />
    <!-- 每日精选 -->
    <ActivatedModule></ActivatedModule>
  </div>
</template>

<script>
import Searchs from '@/components/Searchs'
import Banners from '@/components/Banners'
import Grids from '@/components/Grids'
import DividerLine from '@/components/DividerLine'
import Advertising from '@/components/Advertising'
import ActivatedModule from '@/components/ActivatedModule'
export default {
  components: {
    Searchs,
    Banners, 
    Grids,
    DividerLine,
    Advertising,
    ActivatedModule
  },
  setup() {

  },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>