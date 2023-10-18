<!-- A largura deve ser definida por uma div PAI! -->
<template>
    <div class="banner-container">
        <div class="banner-container-box-big">
            <div class="container-img">
                <img src="@/assets/quasarBanner.webp">
            </div>
        </div>
    </div>
</template>
<style scoped>
.banner-container{
    position: relative;
    width: 100%;
    cursor: pointer;
}
.banner-container-box-big{
    /* border: 1px solid #ccc; */
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
</style>