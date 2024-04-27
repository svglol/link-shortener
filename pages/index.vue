<template>
  <div class="container ml-auto mr-auto px-4 sm:px-0 ">
    <div class="z-50 py-16 bg-base-100">
      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <div class="flex flex-row w-full">
          <UFormGroup name="url" class="w-full h-full">
            <UInput v-model="state.url" placeholder="https://example.com" size="xl" :ui="{ rounded: 'rounded-l-md rounded-r-none' }" />
          </UFormGroup>

          <UButton type="submit" size="xl" :ui="{ rounded: 'rounded-r-md rounded-l-none' }" class="max-h-[2.75rem]">
            Shorten
          </UButton>
        </div>
      </UForm>
    </div>
    <div v-auto-animate class="gap-2 flex flex-wrap justify-center 2xl:justify-normal">
      <LinkItem v-for="item in links" :key="item.id" :item="item" @delete="deleteLink" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

const toast = useToast()
const uuid = useUUID()
const config = useRuntimeConfig()
const { data: links } = await useFetch(`/api/links/${uuid.value}`)

const { copy } = useClipboard()

async function deleteLink(item: Link) {
  await $fetch(`/api/link/${item.id}`, {
    method: 'DELETE',
  })
  if (links.value)
    links.value = links.value.filter(link => link.id !== item.id)
  toast.add({ title: 'Link deleted!', icon: 'heroicons:trash-20-solid' })
}

const schema = z.object({
  url: z.string().url('Invalid URL'),
})

type Schema = z.output<typeof schema>

const state = reactive({
  url: undefined,
})

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const newLink = await $fetch('/api/link', {
    method: 'POST',
    body: { url: event.data.url, uuid: uuid.value ?? '' },
  })
  if (newLink && links.value) {
    links.value.unshift(newLink)
    copy(`${config.public.baseUrl}${newLink.id}`)
    state.url = undefined
    window.scrollTo(0, 0)
  }
}
</script>

<style scoped></style>
