<template>
    <section class="venda">
        <div class="left">
            <div class="container-images">
                <!-- <boxImage :img="perfume.front_img" style="border: none;"/> -->
                <boxImage :img="bigImg" style="border: none;"/>
                <div class="carrosel-container">
                    <div class="carrosel-img">
                        <div class="mini-box-img" v-for="image in perfume.images" @mouseover="changeBigImg(image.src)" @touchstart="changeBigImg(image.src)">
                            <boxImage :img="image.src" style="border: none;"/>
                        </div>
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
export default{
    components:{
        boxImage
    },
    props:['itemData'],
    data(){
        return{
            // perfume: PerfumesServices.getBySlug(this.itemData.url_item),
            perfume: null,
            bigImg: null
        }
    },
    created(){
        this.perfume = PerfumesServices.getBySlug(this.itemData.url_item),
        this.bigImg = this.perfume.front_img
    },
    methods:{
        changeBigImg(img){
            this.bigImg = img;
        }
    }
}
</script>
<style scoped>
*{
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
}
.clear{
    clear: both;
}
.right{
    margin: 0;
    min-width: 400px;
    max-width: 500px;
    width: 100%;
    border-left: 1px solid #ccc;
}
.left{
    margin: 0;
    max-width: 600px;
    width: 100%;
    border-right: 1px solid #ccc;
}
.venda{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
/* left */
.container-images{
    /* margin: 0; */
    position: relative;
    /* max-width: 500px; */
    width: 100%;
}
.carrosel-container{
    margin: 0;
    position: relative;
    /* border:1px solid black; */
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
}
.carrosel-img{
    display: flex;
}
.mini-box-img{
    margin: 0;
    /* margin-right: 5px; */
    cursor: pointer;
    min-width: calc(100% / 4);
    border-bottom: 5px solid transparent;
}
.mini-box-img:hover{
    border-bottom: 5px solid red;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}
/* right */
.descricao{
    /* margin: 0; */
    width: 100%;
    /* max-width: 500px; */
    padding: 20px;
    margin: 1px solid #ccc;
}
.product-title{
    color: black;
    font-size: 26px;
    text-align: left;
}
.title{
    color: black;
    font-size: 26px;
    text-align: left;
    padding: 10px 0;
}
.buy-box{
    padding: 10px;
    border: 1px solid #ccc;
}
.desconto-box{

}
.max-price{
    text-decoration: line-through;
    color: #707070;
    font-size: 22px;
}
.min-price{
    color: black;
    font-size: 32px;
}
.btn-buy{
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
    width:  100%;
    height: 50px;
    cursor: pointer;
}
.box-cupom{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin-top: 20px;
    width: 100%;
    background-color: #e0e0e0;
}
.cupom{
    margin: 0;
    width: 69%;
    padding: 7px;
    display: inline-block;
    border: 1px dashed green;
    background-color: white;
}
.cupom span{
    color: black;
    font-size: 16px;
    font-weight: bold;
    font-family: sans-serif;
}
.btn-copy{
    cursor: pointer;
    margin: 0;
    font-size: 18px;
    width: 29%;
    padding: 5px;
    background-color: transparent;
    border: 1px solid green;
    color: #005e40;
}

@media screen and (max-width: 768px){
    .venda{
        display: block;
    }
    .left{
        width: 100%;
        max-width: none;
        min-width: 0;
    }
    .right{
        width: 100%;
        max-width: none;
        min-width: 0;
    }
}
</style>