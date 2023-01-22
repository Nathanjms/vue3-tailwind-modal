<script>
import { defineComponent, watch, onMounted } from "vue";

export default defineComponent({
  name: "Vue3TailwindModal",
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    allowBackgroundClose: {
      type: Boolean,
      default: true,
    },
    closeOnEscape: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };

    // Prevent scrolling of background
    watch(
      () => props.showModal,
      (newVal) => {
        if (newVal == true) {
          // When the modal is shown, we want a fixed body
          document.querySelector("body").style.top = `-${window.scrollY}px`;
          document.querySelector("body").style.position = "fixed";
        } else {
          // When the modal is hidden, we want to remain at the top of the scroll position
          const scrollY = document.body.style.top;
          document.querySelector("body").style.position = "";
          document.querySelector("body").style.top = ``;
          window.scrollTo(0, parseInt(scrollY || "0") * -1);
        }
      }
    );

    const handleEscClick = (e) => {
      if (e.key === "Escape") {
        close();
      }
    };

    onMounted(() => {
      if (props.closeOnEscape) {
        document.addEventListener("keydown", handleEscClick);
      }
    });

    return {
      close,
    };
  },
});
</script>

<template>
  <Transition name="vtm-fade">
    <div
      v-if="showModal"
      @click.self="() => allowBackgroundClose && close()"
      class="fixed inset-0 w-full h-screen bg-[rgba(0,0,0,0.6)] flex justify-center items-center"
    >
      <div
        class="overflow-auto flex flex-col py-2 px-4 min-w-[70vw] max-w-[90vh] rounded-xl shadow-xl bg-gray-100 dark:bg-slate-700 dark:text-gray-200"
        role="dialog"
      >
        <header class="flex justify-between pb-2">
          <slot name="header"></slot>
          <button @click="close" class="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <section>
          <slot></slot>
        </section>

        <slot name="footer">
          <footer class="py-2 flex justify-end">
            <button
              class="rounded-xl px-2 text-white dark:text-gray-700 bg-gray-700 dark:bg-gray-200 hover:bg-gray-600 dark:hover:bg-gray-300 disabled:bg-gray-500 dark:disabled:bg-gray-500 text-lg"
              type="button"
              aria-label="Close modal"
              @click="close"
            >
              Close
            </button>
          </footer>
        </slot>
      </div>
    </div>
  </Transition>
</template>
