<template>
    <section class="banner">
        <div class="center">
            <div class="banner-container">
                <div class="banner-container-box">
                    <div class="container-img">
                        <img src="@/assets/quasarBanner.webp">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="produtos">
        <div class="center">
            <div class="product-row">
                <div class="product-container">
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto />
                    <Produto /><!-- Recebe: valor, desc, img -->
                </div>
            </div>
        </div>
    </section>
    

</template>
<script>
import Produto from '@/components/template1/produtos.vue';
export default{
    components:{
        Produto
    }
}
</script>
<style scoped>
*{
    box-sizing: border-box;
}
.center{
    padding: 0 2%;
    max-width: 1280px;
    width: 100%;
    text-align: center;
    margin: 0 auto;
}
/* Banner */
.banner{
    width: 100%;
    position: relative;
}
.banner-container{
    position: relative;
    width: 100%;
    max-width: 1280px;
    padding-top: 20px;
}
.banner-container-box{
    border: 1px solid #ccc;
    position: relative;
    width: 100%;
    padding-top: calc((4/13) * 100%);
}
.container-img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.container-img img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    object-fit: contain;
}

/* Produtos */
.produtos{
 margin-top: 20px;   
}
.product-row{
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
}
.product-container{
    display: flex;
}
</style>