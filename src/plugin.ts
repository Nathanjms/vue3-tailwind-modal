import { Vue3TailwindModal } from "./components";
import type { Plugin } from "vue";

export function InstallPlugin(): Plugin {
  return {
    install(app) {
      app.component("Vue3TailwindModal", Vue3TailwindModal);
    },
  };
}
