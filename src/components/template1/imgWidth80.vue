<template>
    <!-- Inserir dentro de um delimitador de largura -->
    <div class="product-item-padding">
        <div class="product-item-image">
            <img :src="img">
        </div>
    </div>
    <!-- Inserir dentro de um delimitador de largura -->
</template>
<script>
export default{
    props:['img']
}
</script>
<style scoped>
.product-item-padding{
    position: relative;
    padding-top: 80%;
    border: 1px solid #ccc;
}
.product-item-image{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
.product-item-image img{
    object-fit: contain;
    width: 100%;
    height: 100%;
}
</style>