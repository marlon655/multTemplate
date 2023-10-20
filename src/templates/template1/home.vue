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
        }
    },
    created(){
        console.log(this.perfume)
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
    margin-top: 20px;
}

.product-row {
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
}

/* .product-row::-webkit-scrollbar{
    height: 0;
} */
.product-container {
    display: flex;
}

.small-banner {
    margin-top: 20px;
}</style>