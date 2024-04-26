<template>
  <div
    class="border border-gray-200  bg-gray-100 dark:border-gray-800 dark:bg-gray-900 flex flex-row items-center rounded-lg shadow z-0"
  >
    <div class="p-4 truncate max-w-lg">
      {{ link }}
    </div>
    <div class="ml-auto flex flex-row items-center space-x-4">
      <UBadge color="green">
        Created: {{ useTimeAgo(new Date(item.createdAt)).value }}
      </UBadge>
      <UBadge color="blue">
        Used: {{ timesUsed }}
      </UBadge>

      <UButtonGroup orientation="horizontal" class="h-14">
        <UButton variant="ghost" :icon="copyActive ? 'heroicons:check-20-solid' : 'heroicons:clipboard-20-solid'" @click="copyToClipboard(item)" />
        <UButton variant="ghost" icon="heroicons:trash-20-solid" @click="$emit('delete', item)" />
      </UButtonGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: Link
}>()
defineEmits<{
  (e: 'delete', item: Link): void
}>()
const config = useRuntimeConfig()
const { copy } = useClipboard()
const copyActive = ref(false)
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

const timesUsed = ref(0)

await $fetch(`/api/link/${props.item.id}/views`).then((data) => {
  timesUsed.value = data
})
</script>
