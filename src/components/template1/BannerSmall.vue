<!-- A largura deve ser definida por uma div PAI! -->
<template>
    <div class="banner-container">
        <div class="banner-container-box-small">
            <div class="container-img">
                <img :src="currentImage">
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: 'BannerSmall',
    data(){
        return{
            images:{
                desktop: require('@/assets/smallbanner.webp'),
                mobile: require('@/assets/smallbanner-mobile.webp')
            },
            currentImageSize: 'desktop'
        }
    },
    created(){
        window.addEventListener('resize', this.handleResize);
        this.handleResize;
    },
    destroyed(){
        window.removeEventListener('resize', this.handleResize);
    },
    methods:{
        handleResize(){
            if(window.innerWidth <= 600){
                this.currentImageSize = 'mobile';
            }else{
                this.currentImageSize = 'desktop';
            }
        }
    },
    computed:{
        currentImage(){
            console.log(this.images[this.currentImageSize])
            return this.images[this.currentImageSize];
        }
    }
}
</script>


<style scoped>
.banner-container{
    width: 100%;
    position: relative;
    cursor: pointer;
}
.banner-container-box-small{
    position: relative;
    /* border: 1px solid #ccc; */
    width: 100%;
    padding-top: 5%;
}
.container-img{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
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
@media screen and (max-width: 600px){
    .banner-container-box-small{
    padding-top: 15%;
}
}
</style>