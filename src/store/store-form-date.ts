// src/store/store-form-date.ts
import { createStore } from '@stencil/store';
const { state } = createStore({
  data: {} as { [key: string]: string },
});

export const formDataStore = {
  setField(name: string, value: string) {
    state.data[name] = value;
  },

  getAllFields() {
    return state.data;
  },
};
