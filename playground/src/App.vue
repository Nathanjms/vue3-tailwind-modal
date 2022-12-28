<script setup lang="ts">
import { ref } from "vue";
import { Vue3TailwindModal } from "vue3-tailwind-modal";

const showModals = ref({
  A: false,
});
</script>

<template>
  <div class="w-screen grid place-items-center justify-center min-h-screen bg-slate-700">
    <button
      @click="showModals.A = true"
      class="rounded-xl px-2 text-white dark:text-gray-700 bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 disabled:bg-gray-500 dark:disabled:bg-gray-500 text-lg"
    >
      Show
    </button>
    <Vue3TailwindModal :showModal="showModals.A" @close="showModals.A = false">
      <template #header>Example 1</template>
      The default slot is the body.
    </Vue3TailwindModal>
  </div>
</template>

<style scoped></style>
