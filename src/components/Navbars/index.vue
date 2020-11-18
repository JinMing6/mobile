<template>
    <NavBar
        title="标题"
        left-text="返回"
        left-arrow
        right-text="添加"
        @click-right="handleAdd"
    ></NavBar>
</template>

<script>
import {NavBar} from 'vant'
export default {
    components: {
        NavBar
    },
    setup() {
        const handleAdd = () => {
            console.log('add')
        }
        return {
            handleAdd
        }
    }
}
</script>

<style>

</style>