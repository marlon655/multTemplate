<template>
    <component v-if="sharedModule.template.selected" :is="components[sharedModule.template.selected]" :itemData="productProps"/>
</template>

<script>
import { markRaw } from 'vue';
import sharedModule from '../sharedModule';
import Template1 from "../templates/template1/productSingle.vue";
// import Template2 from "../templates/template2/contact.vue";
// import Template3 from "../templates/template3/contact.vue";
export default {
    name: 'ProductView',
    data() {
        return{
            components:{
                Template1: markRaw(Template1),
                // Template2: markRaw(Template2),
                // Template3: markRaw(Template3)
            },
            productProps:{
                url_item: this.$route.params.name
            },
            // url_product: this.$route.params.name
        }
    },
    computed: {
        sharedModule() {
            return sharedModule;
        }
    }
}
</script>