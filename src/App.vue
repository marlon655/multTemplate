<template>
  <div id="app">
    <selectBar />
    <component :is="components[sharedModule.template.selected]" v-if="sharedModule.template.selected"/>
  </div>
</template>

<script>
  import { markRaw } from 'vue';
  import sharedModule from './sharedModule';
  import Template1 from '@/templates/template1/NavBar.vue';
  import Template2 from '@/templates/template2/NavBar.vue';
  import Template3 from '@/templates/template3/NavBar.vue';
  import selectBar from '@/templates/TemplateSelector.vue';
  export default{
    components:{
      selectBar
    },
    data(){
      return{
        components:{
                Template1: markRaw(Template1),
                Template2: markRaw(Template2),
                Template3: markRaw(Template3)
            },
      }
    },  
    created(){
      document.body.style.padding = 0;
      document.body.style.margin = 0;
      // document.body.style.boxSizing = 'border-box';
      document.body.style.backgroundColor = '#fff';
    },
    computed:{
      sharedModule(){
        return sharedModule;
      }
    }
  }
</script>

<style>

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  color: #2c3e50; 
}

/* nav {

} */

nav a {
  font-weight: bold;
}

/* nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
