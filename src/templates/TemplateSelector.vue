<template>
    <div class="bar">
        <span>Selecione um template:</span>
        <!-- Muda o valor do objeto global reativo 'template.selected' ,com base no valor
            de uma option no select. Quando mudar a seleção, atribui o valor dessa seleção
            ao 'template.selected' podendo ser acessado em qualquer lugar.
         -->
        <select v-model="selected" @change="selectTemplate">
        <option :value="null" disabled>Selecione uma Opção</option>
        <option v-for="(option, index) in templates" v-bind:value="option.component">
            {{ option.name }}
        </option>
    </select>
    </div>
</template>
<script>
import sharedModule from '../sharedModule';
export default{
    data(){
        return{
            selected: null,
            templates:[
                //Adicionar templates. O atr component deve ter o mesmo nome da pasta.
                {name: "Template 1", component: "Template1"},
                {name: "Template 2", component: "Template2"},
                {name: "Template 3", component: "Template3"}
            ]
        }
    },
    methods:{
        selectTemplate(){
            // sharedModule.template.selected = template.component
            sharedModule.template.selected = this.selected
        }
    }
}
</script>
<style scoped>
*{
   box-sizing: border-box;
}
    .bar{
        padding: 10px;
        width: 100%;
        background-color: #ccc;
    }
</style>