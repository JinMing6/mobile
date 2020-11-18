<template>
    <div class="everyDayBest">
        <header class="eDHeader">顶部</header>
        <main class="eDMain">
            <ul class="eDMainUl">
                <li class="eDMainLi">1</li>
                <li class="eDMainLi">2</li>
                <li class="eDMainLi">3</li>
                <li class="eDMainLi">4</li>
            </ul>
        </main>
        <footer class="eDFooter">更多小米电视产品></footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .everyDayBest {
        .eDHeader {
            height: 2rem;
            background-color: orange;
        }
        .eDMain {
            .eDMainUl {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                .eDMainLi {
                    width: 49.6%;
                    height: 1rem;
                    background: red;
                }
            }
        }
        .eDFooter {
            height: 0.5rem;
            background-color: royalblue;
            text-align: center;
            line-height: 0.5rem;
        }
    }
</style>