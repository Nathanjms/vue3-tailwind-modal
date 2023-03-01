<script setup lang="ts">
import { ref } from "vue";
import { Vue3TailwindModal } from "vue3-tailwind-modal";

const showModals = ref({
  A: false,
  B: false,
  C: false,
});

const darkMode = ref(false);
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div class="absolute right-0 top-0 pr-5 pt-5">
      <button
        class="bg-slate-100 dark:bg-slate-900 dark:text-white rounded-xl p-2"
        @click="() => (darkMode = !darkMode)"
        aria-label="Toggle themes"
      >
        <span v-if="darkMode">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
        <span v-else>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </span>
      </button>
    </div>
    <div
      class="w-screen flex flex-col gap-2 justify-center items-center flex-wrap min-h-screen bg-slate-300 dark:bg-slate-700"
    >
      <div>
        <button
          @click="() => (showModals.A = true)"
          class="rounded-xl px-2 text-white dark:text-gray-700 bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 disabled:bg-gray-500 dark:disabled:bg-gray-500 text-lg"
        >
          Show Example A
        </button>
      </div>
      <div>
        <button
          @click="() => (showModals.B = true)"
          class="rounded-xl px-2 text-white dark:text-gray-700 bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 disabled:bg-gray-500 dark:disabled:bg-gray-500 text-lg"
        >
          Show Example B
        </button>
      </div>
      <div>
        <button
          @click="() => (showModals.C = true)"
          class="rounded-xl px-2 text-white dark:text-gray-700 bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 disabled:bg-gray-500 dark:disabled:bg-gray-500 text-lg"
        >
          Show Example C
        </button>
      </div>
    </div>
    <Vue3TailwindModal :showModal="showModals.A" @close="() => (showModals.A = false)">
      <template #header><h2 class="text-lg">Example A</h2></template>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et dictum arcu, et interdum eros.
        Suspendisse fringilla purus neque, a semper tortor scelerisque ac. Ut sit amet turpis non urna tempor faucibus
        sed eget leo. Etiam gravida odio dui, in tempus turpis pharetra in. Quisque purus dolor, cursus in ornare.
      </div>
    </Vue3TailwindModal>
    <Vue3TailwindModal :showModal="showModals.B" @close="() => (showModals.B = false)">
      <template #header><h2 class="text-lg">Example B</h2></template>
      The default slot is the body, so we don't need to wrap this inside template tags.
      <template #footer><div class="border-t border-slate-300 mt-2 text-right">The footer can be customised, too.</div></template>
    </Vue3TailwindModal>
    <Vue3TailwindModal
      :showModal="showModals.C"
      @close="() => (showModals.C = false)"
      colors="bg-blue-600 dark:bg-blue-900 text-gray-200"
    >
      <template #header><h2 class="text-lg">Example C</h2></template>
      The background color of the modal can also be customised.
    </Vue3TailwindModal>
  </div>
</template>
