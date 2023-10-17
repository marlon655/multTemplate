<template>
    <component v-if="sharedModule.template.selected" :is="components[sharedModule.template.selected]"/>
</template>

<script>
import sharedModule from '../sharedModule';
import Template1 from "../templates/template1/home.vue";
import Template2 from "../templates/template2/home.vue";
import Template3 from "../templates/template3/home.vue";
export default {
  name: 'HomeView',
  data(){
    return{
      components:{
        Template1, Template2, Template3
      },
    }
  },
  computed: {
    sharedModule() {
      return sharedModule; // Inicialize sharedModule
    }
  }
}
</script>
