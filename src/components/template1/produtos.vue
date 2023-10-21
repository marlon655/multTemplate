<template>
    <div class="produtos">
        <div class="product-item">
            <div class="product-item-formact">
                <div class="product-item-image">
                    <img :src="item.front_img">
                </div>
                <div class="product-item-desc">
                    <div class="product-item-pad">
                        <span class="title">{{ item.title }}</span>
                        <router-link to="#" class="item-link">{{ item.text_link }}</router-link>
                        <span class="max-price">R$ {{ item.max_price }}</span>
                        <span class="price">R$ {{ item.price }}</span>
                        <p class="description-item">{{ item.desc_item }}</p>
                        <div class="box-buy">
                            <button class="btn-buy">Compre Agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default{
    props:['item']
}
</script>
<style scoped>
*{
    box-sizing: border-box;
    margin: 0 auto;
}
.produtos{
    min-width: calc(100% / 4);
    padding-top: 40%;
    height: 500px;
    /* border: 2px solid #ccc; */
    position: relative;
    /* margin-bottom: 20px; */
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
    position: relative;
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

.box-buy{
    background-color: rgba(255, 255,255, 0.8);
    text-align: center;
    display: flex;
    align-items: center;
    height: 100px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
}
.btn-buy{
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
    font-size: 16px;
    font-weight: bold;
    width:  90%;
    height: 50px;
    cursor: pointer;
}

@media screen and (max-width: 1024px){
    .produtos{
        min-width: calc(100% / 3);
        /* padding-top: 50%; */
    }
}
@media screen and (max-width: 768px){
    .produtos{
        /* padding-top: 60%; */
        min-width: calc(100% / 2);
    }
}
@media screen and (max-width: 600px){
    .produtos{
        /* padding-top: 60%; */
        min-width: 100%;
    }
}
</style>