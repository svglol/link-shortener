<template>
  <div
    class="border border-base-content/20 bg-base-200 flex flex-row items-center rounded-lg shadow z-0"
  >
    <div class="p-4 truncate max-w-lg font-semibold">{{ link }}</div>
    <div class="ml-auto flex flex-row items-center space-x-4">
      <div class="badge badge-secondary">
        {{ useTimeAgo(new Date(item.createdAt)).value }}
      </div>
      <div class="btn-group">
        <button class="btn btn-ghost" @click="copyToClipboard(item)">
          <label
            class="swap swap-active swap-rotate"
            :class="{ 'text-success': copyActive }"
          >
            <div :class="{ 'swap-on': !copyActive, 'swap-off': copyActive }">
              <Icon name="heroicons:clipboard-20-solid" class="text-xl" />
            </div>
            <div :class="{ 'swap-off': !copyActive, 'swap-on': copyActive }">
              <Icon name="heroicons:check-20-solid" class="text-xl" />
            </div>
          </label>
        </button>
        <button class="btn btn-ghost" @click="$emit('delete', item)">
          <Icon name="heroicons:trash-20-solid" class="text-xl" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const { copy } = useClipboard()
const copyActive = ref(false)
const props = defineProps<{
  item: Link
}>()
defineEmits<{
  (e: 'delete', item: Link): void
}>()
async function copyToClipboard(item: Link) {
  copy(`${config.public.baseUrl}${item.id}`)
  copyActive.value = true
  useTimeoutFn(() => {
    copyActive.value = false
  }, 1000)
}

const link = computed(() => {
  return props.item.url.replace(/^https?:\/\//, '')
})
</script>

<style scoped></style>
