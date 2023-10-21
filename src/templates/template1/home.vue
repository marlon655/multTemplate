<template>
    <section class="banner">
        <!-- <div class="center"> -->
            <bigBanner />
        <!-- </div> -->
    </section>

    <section class="produtos">
        <!-- <div class="center"> -->
            <div class="product-row">
                <div class="product-container">
                    <Produto v-for="item in perfume" :key="item.id" :item="item"/><!-- Recebe: valor, desc, img -->
                </div>
                <span class="arrow-color arrow-left" @click="scrollXleft"><font-awesome-icon :icon="['fas', 'arrow-left']" /></span>
                <span class="arrow-color arrow-right" @click="scrollXright"><font-awesome-icon :icon="['fas', 'arrow-right']" /></span>
            </div>
            <div class="small-banner">
                <smallBanner />
            </div>
        <!-- </div> -->
    </section>
</template>
<script>
import Produto from '@/components/template1/produtos.vue';
import smallBanner from '@/components/template1/BannerSmall.vue';
import bigBanner from '@/components/template1/BannerBig.vue';
import perfumesServices from '../../../services/perfumes.js';
const PerfumesServices = new perfumesServices();
export default {
    components: {
        Produto, smallBanner, bigBanner
    },
    data(){
        return{
            perfume: PerfumesServices.getPerfumes(),
            with: 0
        }
    },
    methods:{
        scrollXright(){
            let scroll = document.querySelector(".product-row");
            let width = scroll.offsetWidth;
            scroll.scrollLeft += width;
        },
        scrollXleft(){
            let scroll = document.querySelector(".product-row");
            let width = scroll.offsetWidth;
            scroll.scrollLeft -= width;
        }

    }
}
</script>
<style scoped>
* {
    box-sizing: border-box;
}

.center {
    padding: 0 2%;
    max-width: 1280px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
}

/* Banner */
.banner {
    width: 100%;
    margin-top: 20px;
}

/* Produtos */
.produtos {
    position: relative;
    margin-top: 20px;
}

.product-row {
    /* position: relative; */
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    width: 100%;
}
.product-row::-webkit-scrollbar{
    height: 0;
}
.arrow-left{
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}
.arrow-right{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
}
.arrow-color{
    display: none;
    color: black;
    width: 50px;
    height: 50px;
    line-height: 50px;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    border: 1px solid #ccc;
    font-size: 40px;
}
.arrow-right:hover,
.arrow-left:hover{
    color: #00A470;
    border: 1px solid #00A470;
    cursor: pointer;
}
.product-row:hover .arrow-color {
    display: block;
}
.product-container {
    display: flex;
}

.small-banner {
    margin-top: 20px;
}
</style>