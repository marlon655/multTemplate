<template>
    <div v-if="selected == null" class="desc">
        <span>
            Os templates ainda estão em construção.<b> No entanto, já é possível visualizar o Template 1.</b>
            A ideia destes Templates é poder trocar as cores, lugar dos componentes, toda a base de estilização e marcação.
            E quando escolhido, o cliente salva a seleção, podendo mudar o template quando quiser.
        </span>
    </div>
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
    .bar span{
        color: black;
        font-size: 18px;
    }
    .bar select{
        font-size: 18px;
    }
    .desc{
        margin: 0 auto;
        text-align: center;
        width: 100%;
        max-width: 1280px;
        border: 1px solid #ccc;
        margin-top: 10px;
        margin-bottom: 10px;
        padding: 10px;
    }
    .desc span{
        color: rgb(3, 87, 0);
        font-size: 18px;
    }
</style>