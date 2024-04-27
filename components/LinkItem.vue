<template>
  <UCard :ui="{ header: { padding: 'p-0 sm:p-0' }, footer: { padding: 'p-0 sm:p-0' } }" class="w-[300px]">
    <template #header>
      <NuxtLink :to="`/${item.id}`" target="_blank">
        <NuxtImg :src="`${config.public.baseUrl}images/${item.qrCode}`" alt="QR Code" width="300" class="rounded-t-md" height="300" />
      </NuxtLink>
    </template>
    <div class="flex flex-col items-center gap-2">
      <div class="px-4 truncate max-w-[250px]">
        {{ link }}
      </div>
      <div class="flex flex-row items-center gap-2">
        <UBadge color="green">
          Created: {{ useTimeAgo(new Date(item.createdAt)).value }}
        </UBadge>
        <UBadge color="blue">
          Used: {{ timesUsed }}
        </UBadge>
      </div>
    </div>
    <template #footer>
      <div class="flex flex-row w-full h-10 items-stretch rounded-b-lg">
        <UButton :icon="copyActive ? 'heroicons:check-20-solid' : 'heroicons:clipboard-20-solid'" :ui="{ base: 'grow', rounded: 'rounded-t-none rounded-bl-lg rounded-br-none', icon: { base: 'mx-auto' } } " variant="soft" color="green" @click="copyToClipboard(item)" />
        <UButton icon="heroicons:trash-20-solid" :ui="{ base: 'grow items-center', rounded: 'rounded-t-none rounded-bl-none rounded-br-lg', icon: { base: 'mx-auto' } }" color="red" variant="soft" @click="$emit('delete', item)" />
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  item: Link
}>()
defineEmits<{
  (e: 'delete', item: Link): void
}>()
const toast = useToast()
const config = useRuntimeConfig()
const { copy } = useClipboard()
const copyActive = ref(false)

async function copyToClipboard(item: Link) {
  copy(`${config.public.baseUrl}${item.id}`)
  copyActive.value = true
  toast.add({ title: 'Copied to clipboard!', icon: 'heroicons:clipboard-20-solid' })
  useTimeoutFn(() => {
    copyActive.value = false
  }, 1000)
}

const link = computed(() => {
  return props.item.url.replace(/^https?:\/\//, '')
})

const timesUsed = await $fetch(`/api/link/${props.item.id}/views`)
</script>
