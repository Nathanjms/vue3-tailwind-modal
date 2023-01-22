<script setup lang="ts">
import { ref } from "vue";
import { Vue3TailwindModal } from "vue3-tailwind-modal";

const showModals = ref({
  A: false,
  B: false,
});

// TODO: Dark mode toggle here!
</script>

<template>
  <div class="w-screen grid place-items-center justify-center min-h-screen bg-slate-700">
    <button
      @click="showModals.A = true"
      class="rounded-xl px-2 text-white dark:text-gray-700 bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 disabled:bg-gray-500 dark:disabled:bg-gray-500 text-lg"
    >
      Show Example A
    </button>
    <Vue3TailwindModal :showModal="showModals.A" @close="showModals.A = false">
      <template #header><h2 class="text-lg">Example A</h2></template>
      The default slot is the body, so we don't need to wrap this inside template tags.
    </Vue3TailwindModal>
    <button
      @click="showModals.B = true"
      class="rounded-xl px-2 text-white dark:text-gray-700 bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 disabled:bg-gray-500 dark:disabled:bg-gray-500 text-lg"
    >
      Show Example B
    </button>
    <Vue3TailwindModal :showModal="showModals.B" @close="showModals.B = false">
      <template #header><h2 class="text-lg">Example B</h2></template>
      The default slot is the body, so we don't need to wrap this inside template tags.
      <template #footer><div class="border-t mt-2 text-right">The footer can be customised, too.</div></template>
    </Vue3TailwindModal>
  </div>
</template>
