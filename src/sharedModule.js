import { reactive } from 'vue';

const sharedModule = {
  template: {
    selected: null,
  },
};

export default reactive(sharedModule);