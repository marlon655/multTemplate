<template>
    <div>
        <h2>Selecione um template</h2>
    </div>
    <ul>
        <li v-for="(template, index) in templates" :key="index">
            <button @click="selectTemplate(template)">{{ template.name }}</button>
        </li>
    </ul>

    <component :is="components[template]" v-if="template" />
</template>

<script>
import { markRaw } from 'vue';
import sharedModule from '../sharedModule';
import Template1 from "../templates/template1/home.vue";
import Template2 from "../templates/template2/home.vue";
import Template3 from "../templates/template3/home.vue";
export default {
    data() {
        return {
            components: {
                Template1: markRaw(Template1),
                Template2: markRaw(Template2),
                Template3: markRaw(Template3)
            },
            templates: [
                { name: "Template 1", component: "Template1" },
                { name: "Template 2", component: "Template2" },
                { name: "Template 3", component: "Template3" }
            ],
            template: null,
        }
    },
    methods: {
        selectTemplate(template) {
            this.template = template.component,
                sharedModule.template.selected = template.component
        }
    }
}
</script>

<style></style>