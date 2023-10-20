<template>
    <footer>
        <div class="center">
            <div class="footer-content">

                <div class="content is-mobile" v-for="(section, index) in footer" :key="section.id">
                    <h2 @click="showDetails(index)">{{ section.title }} +</h2>
                    <ul v-if="indexOpen === index">
                        <li v-for="link in section.links" :key="link.desc">
                            <a :href="link.adress">{{ link.desc }}</a>
                        </li>
                    </ul>
                </div>

                <div class="content is-desktop" v-for="section in footer" :key="section.id">
                    <h2>{{ section.title }}</h2>
                    <ul>
                        <li v-for="link in section.links" :key="link.desc">
                            <a :href="link.adress">{{ link.desc }}</a>
                        </li>
                    </ul>
                </div>
            
            </div>
            <div class="payments">
                <div class="box-container">
                    <div class="box-container-img">
                        <div class="box-container-img-content">
                            <img src="@/assets/payment.webp">
                        </div>
                    </div>
                </div>
                <div class="box-container">
                    <div class="box-container-img">
                        <div class="box-container-img-content">
                            <img src="@/assets/security.webp">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
<script>
import FooterService from '../../../services/footer.js';
const footerService = new FooterService()
export default{
    data(){
        return{
            footer: footerService.getLinks(),
            indexOpen: null
        }
    },
    methods:{
        showDetails(index){
            if(this.indexOpen === index){
                this.indexOpen = null;
            }else{
                this.indexOpen = index;
            }
        }
    }
}
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

footer {
    margin-top: 20px;
    width: 100%;
    background-color: #00A470;
    padding: 10px;
    border-bottom: 10px solid #00442f;
}

.center {
    margin: 0 auto;
    padding: 0 2%;
    width: 100%;
    max-width: 1280px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
}

.content {
    text-align: left;
    width: 100%;
    max-width: 200px;
}

.content h2 {
    font-size: 18px;
}

.content ul li {
    padding: 5px 0;
    list-style-type: none;
}

.content ul li a {
    color: white;
    font-size: 16px;
    text-decoration: none;
}
.payments {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin: 10px 0;
}

.box-container {
    max-width: 350px;
    width: 100%;
    position: relative;
}

.box-container-img {
    padding-top: 10%;
    position: relative;
    width: 100%;
}

.box-container-img-content {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
}

.box-container-img-content img {
    object-fit: contain;
    width: 100%;
    height: 100%;
}
.is-desktop{
    display: block;
}
.is-mobile{
    display: none;
}
@media screen and (max-width: 768px){
.payments{
    display: inline-block;
}
.box-container{
    margin: 0 auto;
}
.footer-content{
    display: block;
}
.content{
    text-align: left;
    padding-top: 10px;
    max-width: none;
}
.content h2{
    cursor: pointer;
    color: white;
    border-bottom: 1px solid black;
}
.content h2:hover{
    color: black
}
.is-desktop{
    display: none;
}
.is-mobile{
    display: block;
}
}
</style>