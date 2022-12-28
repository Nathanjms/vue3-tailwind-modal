import '@vue/runtime-core';
import {
  Vue3TailwindModal
} from 'vue3-tailwind-modal';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Vue3TailwindModal: typeof Vue3TailwindModal;
  }
}

export {};
