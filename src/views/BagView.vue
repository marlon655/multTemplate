<template>
    <component v-if="sharedModule.template.selected" :is="components[sharedModule.template.selected]" />
</template>

<script>
import { markRaw } from 'vue';
import sharedModule from '../sharedModule';
import Template1 from "../templates/template1/bag.vue";
// import Template2 from "../templates/template2/bag.vue";
// import Template3 from "../templates/template3/bag.vue";
export default {
    name: 'ContactView',
    data() {
        return{
            components:{
                Template1: markRaw(Template1),
                // Template2: markRaw(Template2),
                // Template3: markRaw(Template3)
            },
        }
    },
    computed: {
        sharedModule() {
            return sharedModule;
        }
    }
}
</script>