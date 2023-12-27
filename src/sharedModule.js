import { reactive } from 'vue';

const sharedModule = {
  template: {
    selected: null,
  },
  itensInBag: 0,
};

export default reactive(sharedModule);