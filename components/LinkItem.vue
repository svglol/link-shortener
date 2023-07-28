<template>
  <div class="border border-base-content/20 bg-base-200 flex flex-row items-center rounded-lg shadow z-0">
    <div class="p-4 truncate max-w-lg font-semibold">{{ link }}</div>
    <div class="ml-auto flex flex-row items-center space-x-4">
      <div class="badge badge-secondary">{{ useTimeAgo(new Date(item.createdAt)).value }}</div>
      <div class="btn-group">
        <button
          class="btn btn-ghost"
          @click="copyToClipboard(item)"
        >
          <label
            class="swap swap-active swap-rotate"
            :class="{ 'text-success': copyActive }"
          >
            <div :class="{ 'swap-on': !copyActive, 'swap-off': copyActive }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-clipboard"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"
                />
                <path
                  d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"
                />
              </svg>
            </div>
            <div :class="{ 'swap-off': !copyActive, 'swap-on': copyActive }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                />
              </svg>
            </div>
          </label>
        </button>
        <button
          class="btn btn-ghost"
          @click="$emit('delete', item)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
            />
            <path
              fill-rule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { copy } = useClipboard();
const copyActive = ref(false);
const props = defineProps<{
  item: Link;
}>();
defineEmits<{
  (e: 'delete', item: Link): void;
}>();
async function copyToClipboard(item: Link) {
  copy(`${config.public.baseUrl}${item.id}`);
  copyActive.value = true;
  useTimeoutFn(() => {
    copyActive.value = false;
  }, 1000);
}

const link = computed(() => {
  return props.item.url.replace(/^https?:\/\//, '');
});
</script>

<style scoped></style>
