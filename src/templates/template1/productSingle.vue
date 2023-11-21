<template>
    <section class="venda">
        <div class="left">
            <div class="container-images">
                <div class="carrosel-container" @touchstart="startTouch" @touchmove="moveTouch" @touchend="endTouch">
                    <div class="carrosel-img">
                        <div class="big-box-img" v-for="image in perfume.images">
                            <boxImage :img="image.src" style="border: none;"/>
                        </div>
                    </div>
                </div>

                <div class="carrosel-container" style="overflow-x: auto;">
                    <div class="carrosel-img">
                        <div class="mini-box-img" v-for="(image, index) in perfume.images" @mouseover="changeBigImg(index)"
                            @touchstart="changeBigImg(index)">
                            <boxImage :img="image.src" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="caracteristics">
                <div class="info-line">
                    <span class="info-label">Categoria</span>
                    <span class="info-value">Masculino</span>
                </div>
                <div class="info-line">
                    <span class="info-label">Subfamilia</span>
                    <span class="info-value">Ambar</span>
                </div>
                <div class="info-line">
                    <span class="info-label">Linha</span>
                    <span class="info-value">Gold</span>
                </div>
            </div>

            <div class="product-description">
                <div class="container-description" v-for="(info, index) in perfume.about_info">
                    <div class="title-description" @click="showDetails(index)" :class="{'description-open': indexOpen == index}">
                        <h5>{{ info.title }}</h5>
                        <font-awesome-icon :icon="getClassIcon(index)" />
                    </div>
                    <div class="text-description" v-if="indexOpen === index">
                        <p>{{ info.text }}</p>
                    </div>
                </div>
            </div>

        </div>


        <div class="right">
            <div class="descricao">
                <div class="box-descricao">
                    <h2 class="product-title">{{ perfume.text_link }}</h2>
                    <h2 class="title">{{ perfume.title }}</h2>
                </div>

                <div class="buy-box">
                    <div class="desconto-box">
                        <h2 class="max-price">R${{ perfume.max_price }}</h2>
                        <h2>(11% de desconto)</h2>
                    </div>
                    <h2 class="min-price">R${{ perfume.price }}</h2>
                    <router-link to="#" style="width: 100%;"><button class="btn-buy">Compre Agora</button></router-link>
                    <div class="box-cupom">
                        <div class="cupom">
                            <span>CUPOM: Maisdesconto</span>
                        </div>
                        <button class="btn-copy">copiar</button>
                    </div>
                </div>
            </div>
        </div>



    </section>
</template>
<script>
import perfumesServices from '../../../services/perfumes.js';
import boxImage from '@/components/template1/imgWidth80.vue';
const PerfumesServices = new perfumesServices();
export default {
    components: {
        boxImage
    },
    props: ['itemData'],
    data() {
        return {
            // perfume: PerfumesServices.getBySlug(this.itemData.url_item),
            indexOpen: 0,
            perfume: null,
            touchStartX: 0,
            deltaX: 0,
            final: 0,
        }
    },
    created() {
        this.perfume = PerfumesServices.getBySlug(this.itemData.url_item)
    },
    computed:{
        opened(){

        }
    },
    methods: {
        changeBigImg(index) {
            const scroll = document.querySelector('.carrosel-container');
            const width = scroll.offsetWidth;
            scroll.scrollLeft = (width * index);
        },
        startTouch(event) {
            this.touchStartX = event.touches[0].clientX;
        },
        moveTouch(event) {
            const touchX = event.touches[0].clientX;
            let deltaX = touchX - this.touchStartX;
            this.deltaX = deltaX;
            this.touchStartX = touchX;
        },
        endTouch() {
            const scroll = document.querySelector('.carrosel-container');
            const width = scroll.offsetWidth;
            const threshold = 0.1;
            if (this.deltaX > threshold) {
                scroll.scrollLeft += -width;
            } else if (this.deltaX < -threshold) {
                scroll.scrollLeft += +width;
                if(this.final == 1){
                    scroll.scrollLeft = 0;
                    this.final = 0;
                }
                if(scroll.scrollLeft == scroll.scrollWidth - width){
                    this.final = 1;
                }
            }
        },
        showDetails(index){
            if(this.indexOpen === index){
                this.indexOpen = null;
            }else{
                this.indexOpen = index;
            }
        },
        getClassIcon(index){
            return this.indexOpen === index ? ['fas', 'angle-up'] : ['fas', 'angle-down'];
        }

    }
}
</script>
<style scoped>
* {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
}

.clear {
    clear: both;
}

.right {
    margin: 0;
    min-width: 400px;
    max-width: 500px;
    width: 100%;
    border-left: 1px solid #ccc;
}

.left {
    margin: 0;
    max-width: 600px;
    width: 100%;
    border-right: 1px solid #ccc;
}

.venda {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

/* left */
.container-images {
    position: relative;
    width: 100%;
}
.carrosel-container {
    margin: 0;
    position: relative;
    width: 100%;
    overflow: hidden;
    transition: scroll-left 2s ease;
}
.carrosel-img {
    display: flex;
}
.mini-box-img {
    margin: 0;
    /* margin-right: 5px; */
    cursor: pointer;
    min-width: calc(100% / 4);
    border-bottom: 5px solid transparent;
}
.mini-box-img:hover {
    border-bottom: 5px solid red;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.big-box-img {
    margin: 0;
    min-width: 100%;
}
/* Caracteristicas */
.caracteristics{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.info-line{
    text-align: left;
    width: 100%;
    padding: 10px 0;
}
.info-label{
    font-weight: bold;
    font-size: 16px;
    color: black;
    display: block;
}
.info-value{
    color: rgb(43, 43, 43);
    display: block;
}
/* Descrição do produto */
.product-description{
    width: 100%;
    margin-top: 10px;
}
.container-description{
    width: 100%;
}
.title-description h5{
    display: block;
    font-weight: 300;
    width: 100%;
}
.title-description{
    cursor: pointer;
    color: black;
    font-size: 20px;
    font-family: sans-serif;
    text-align: left;
    padding: 10px 0;
    border-top: 5px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding-right: 10px;
}
.title-description:hover{
    color: #00a470;
    border-color: #00a470;
}
.description-open{
    border-color:#00442F;
    color: #00442F;
    font-size: 22px;
    font-weight: bold;
}
.text-description{
    color: black;
    font-size: 16px;
    font-family: sans-serif;
    text-align: left;
}
.text-description p{
    padding: 5px 0;
}
/* right */
.descricao {
    width: 100%;
    padding: 20px;
    margin: 1px solid #ccc;
}

.product-title {
    color: black;
    font-size: 26px;
    text-align: left;
}

.title {
    color: black;
    font-size: 26px;
    text-align: left;
    padding: 10px 0;
}

.buy-box {
    padding: 10px;
    border: 1px solid #ccc;
}

.max-price {
    text-decoration: line-through;
    color: #707070;
    font-size: 22px;
}

.min-price {
    color: black;
    font-size: 32px;
}

.btn-buy {
    margin-top: 20px;
    text-align: center;
    background-color: #00a470;
    border: none;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 2px solid #005e40;
    border-right: 2px solid #005e40;
    color: aliceblue;
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
    width: 100%;
    height: 50px;
    cursor: pointer;
}

.box-cupom {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 20px;
    width: 100%;
    background-color: #e0e0e0;
}

.cupom {
    margin: 0;
    width: 69%;
    padding: 7px;
    display: inline-block;
    border: 1px dashed green;
    background-color: white;
}

.cupom span {
    color: black;
    font-size: 16px;
    font-weight: bold;
    font-family: sans-serif;
}

.btn-copy {
    cursor: pointer;
    margin: 0;
    font-size: 18px;
    width: 29%;
    padding: 5px;
    background-color: transparent;
    border: 1px solid green;
    color: #005e40;
}

@media screen and (max-width: 768px) {
    .venda {
        display: block;
    }

    .left {
        width: 100%;
        max-width: none;
        min-width: 0;
    }

    .right {
        width: 100%;
        max-width: none;
        min-width: 0;
    }
}</style>