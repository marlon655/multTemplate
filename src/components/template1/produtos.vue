<template>
    <div class="produtos">
        <div class="product-item">
            <div style="width: 100px; height: 100px; background-color: red;"></div>
        </div>
    </div>
</template>
<script>

export default{

}
</script>
<style scoped>
.produtos{
    min-width: calc(100% / 4);
    padding-top: 30%;
    border: 2px solid #ccc;
    position: relative;
}
.product-item{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: blueviolet; */
}
</style>