<script setup lang="ts">
import { ref } from "vue";
import { Vue3TailwindModal } from "vue3-tailwind-modal";

const showModal = ref(false);
</script>

<template>
  <div class="w-screen grid place-items-center justify-center min-h-screen bg-slate-700">
    <button @click="showModal = true" class="transition duration-300">Show</button>
    <Vue3TailwindModal :showModal="showModal">
      <template #header>Example 1</template>
      The defualt slot is the body.
    </Vue3TailwindModal>
  </div>
</template>

<style scoped></style>
