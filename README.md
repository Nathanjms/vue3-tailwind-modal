# Vue3 Tailwind Modal

A simple modal, written in Vue3.

Note: _Tailwind is required to use this package, but is not forced as a dependency. See [here](https://tailwindcss.com/docs/guides/vite#vue) for how to set it up with Vite._

<p align="center">
  <img src="https://img.shields.io/npm/v/vue3-tailwind-modal" />
  <img src="https://img.shields.io/npm/dt/vue3-tailwind-modal" />
</p>

## Screenshot(s)
### Light Mode

![image](https://user-images.githubusercontent.com/64075030/209852301-e9d1b786-9061-4ac6-bdd4-eb2fc85f5d09.png)

### Dark Mode

![image](https://user-images.githubusercontent.com/64075030/209852426-3c680912-3ba1-4e41-9b81-aa723181a63d.png)



## Installation

Install Auto Typer Vue3 with npm

```bash
npm install vue3-tailwind-model
```

Then, to avoid the css being purged by tailwind, add `./node_modules/vue3-tailwind-modal/**/*.js` to the `content` section of your tailwind config (leave the rest of this config alone, just add this entry in - see below):

```js
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/vue3-tailwind-modal/**/*.js",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
```

## Props

| Prop                 | Type    | Default                                            | Description                                                          | Validation |
| :------------------- | :------ | :------------------------------------------------- | :------------------------------------------------------------------- | :--------- |
| showModal            | Boolean | false                                              | Toggles whether the modal can be seen.                               | N/A        |
| allowBackgroundClose | Boolean | true                                               | Allows closing of the modal by clicking the background.              | N/A        |
| closeOnEscape        | Boolean | true                                               | Allows closing of the modal by clicking the Esc key on the keyboard. | N/A        |
| backgroundColors     | String  | "bg-gray-100 dark:bg-slate-700 dark:text-gray-200" | Allows customisation of the modal's background color.                | N/A        |
## Usage/Example

### Basic Example

```vue
<script setup lang="ts">
import { ref } from "vue";
import { Vue3TailwindModal } from "vue3-tailwind-modal";

const showModal = ref(false);
</script>

<template>
  <div class="w-screen grid place-items-center justify-center min-h-screen bg-slate-700">
    <button
      @click="showModal = true"
      class="rounded-xl px-2 text-white dark:text-gray-700 bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 disabled:bg-gray-500 dark:disabled:bg-gray-500 text-lg"
    >
      Show Modal A
    </button>
    <Vue3TailwindModal :showModal="showModal" @close="showModal = false">
      <template #header><h2 class="text-lg">Example 1</h2></template>
      The default slot is the body, so we don't need to wrap this inside template tags.
    </Vue3TailwindModal>
  </div>
</template>
```

The footer can be customised too, eg.

```vue
<template>
  <Vue3TailwindModal :showModal="showModal" @close="showModal = false">
    <template #header><h2 class="text-lg">Example B</h2></template>
    The default slot is the body, so we don't need to wrap this inside template tags.
    <template #footer><div class="border-t mt-2 text-right">The footer can be customised, too.</div></template>
  </Vue3TailwindModal>
</template>
```

## Development

There is a folder `playground` **inside** this repository which can be used as a basis for development. Clone the repo and run:

1. `npm run dev:install`
2. `npm run dev:run`

To launch this folder with Vite.

The `App.vue` file can be modified to see changes in the browser, and navigating to `/src/components/vue3-tailwind-modal/Vue3TailwindModal.vue` will update the changes on the browser for the Modal.

To test the packaged build, run:

0. `npm install`
1. `npm build:vite`
2. `npm run dev:run-pack`

This will run a dev server with the packaged version of `vue3-tailwind-modal3`, instead of the normal one.
# vue3-tailwind-modal
