<template>
    <div class="produtos">
        <div class="product-item">
            <div class="product-item-formact">
                <div class="product-item-image">
                    <img src="@/assets/quasar.webp">
                </div>
                <div class="product-item-desc">
                    <div class="product-item-pad">
                        <span class="title">QUASAR</span>
                        <router-link to="#" class="item-link">Vision Desodorante Colônia 100ml</router-link>
                        <span class="max-price">R$ 140,90</span>
                        <span class="price">R$ 115,90</span>
                        <p class="description-item">
                            O Combo Quasar Vision traz perfumação e frescor para te incentivar
                            a correr atrás de seus objetivos e ir além.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default{

}
</script>
<style scoped>
*{
    box-sizing: border-box;
    margin: 0 auto;
}
.produtos{
    min-width: calc(100% / 4);
    padding-top: 35%;
    /* border: 2px solid #ccc; */
    position: relative;
}
.product-item{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 5px;
}
.product-item-formact{
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
}
.product-item-image{
    width: 100%;
    height: 50%;
}
.product-item-image img{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.product-item-desc{
    width: 100%;
    height: 50%;
    text-align: left;
}
.product-item-pad{
    padding: 0 2%;
}
.title{
    padding-bottom: 5px;
    font-size: 14px;
    font-weight: 600;
    font-family: sans-serif;
    display: inline-block;
    width: 100%;
}
.product-item-desc a{
    padding-bottom: 5px;
    text-decoration: none;
    color: black;
    font-size: 14px;
    display: inline-block;
}
.product-item-desc a:hover{
    color: green;
}
.max-price{
    width: 100%;
    padding-bottom: 5px;
    display: inline-block;
    font-size: 14px;
    color: #5e5e5e;
    text-decoration: line-through;
}
.price{
    padding-bottom: 5px;
    color: black;
    font-size: 16px;
    font-weight: bold;
    display: inline-block;
    width: 100%;
}
.description-item{
    color: black;
    font-size: 14px;
    display: inline-block;
    width: 100%;
}
</style>