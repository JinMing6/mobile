<template>
    <div class="everyDayBest">
        <header class="eDHeader">
            <img class="eDHeaderImg" src="@/assets/imgs/redmi.webp" alt="">
        </header>
        <main class="eDMain">
            <ul class="eDMainUl">
                <li class="eDMainLi" v-for="item in [0, 1, 2, 3]" :key="item">
                    <img class="eDMainImg" src="@/assets/imgs/phone.jpg" alt="">
                </li>
            </ul>
        </main>
        <footer class="eDFooter">更多小米电视产品></footer>
    </div>
</template>

<script>
export default {
    setup() {
        
    }
}
</script>

<style lang="scss" scoped>
    .everyDayBest {
        .eDHeader {
            height: 2rem;
            background-color: orange;
            .eDHeaderImg {
                width: 100%;
                height: 100%;
            }
        }
        .eDMain {
            .eDMainUl {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .eDMainLi {
                    width: 49.6%;
                    height: 1.6rem;
                    background: red;
                    .eDMainImg {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .eDFooter {
            height: 0.5rem;
            text-align: center;
            line-height: 0.5rem;
            color: rgba(0,0,0,.6);
        }
    }
</style>