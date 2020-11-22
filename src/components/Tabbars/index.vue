<template>
  <Tabbar v-model="states.active">
    <TabbarItem icon="home-o" name="home" @click="handleNav('/home')">主页</TabbarItem>
    <TabbarItem icon="apps-o" name="classify" @click="handleNav('/classify')">分类</TabbarItem>
    <TabbarItem icon="shopping-cart-o" name="shopCart" @click="handleNav('/shopCart')">购物车</TabbarItem>
    <TabbarItem icon="user-o" name="mine" @click="handleNav('/mine')">我的</TabbarItem>
  </Tabbar>
</template>

<script>
import {reactive } from "vue";
import {useRouter} from 'vue-router'
import { Tabbar, TabbarItem } from "vant";
export default {
  components: {
    Tabbar,
    TabbarItem,
  },
  setup() {
    const {push} = useRouter()
    let states = reactive({
      active: "home",
    });
    const handleNav = (path) => {
      push({path})
    };
    return {
      states,
      handleNav,
    };
  },
};
</script>

<style>
</style>