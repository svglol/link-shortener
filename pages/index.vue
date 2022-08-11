<template>
  <div class="max-w-3xl ml-auto mr-auto">
    <div class="z-50 py-16 bg-base-100">
      <FormKit
        id="linkForm"
        type="form"
        :actions="false"
        :incomplete-message="false"
        @submit="createLink"
      >
        <FormKit
          type="text"
          name="url"
          placeholder="https://www.example.com..."
          validation="required|url"
          outer-class="grow mb-0"
          input-class="rounded-r-none"
        />

        <FormKit
          type="submit"
          label="Shorten"
          input-class="rounded-l-none"
        />
      </FormKit>
    </div>
    <ul
      v-auto-animate
      class="space-y-2 pb-2"
    >
      <li
        v-for="item in links"
        :key="item.id"
      >
        <LinkItem
          :item="item"
          @delete="deleteLink"
        />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { reset } from '@formkit/core';
import { Link } from '@prisma/client';
const uuid = useUUID();
const config = useRuntimeConfig();
const client = useClient();
const { data: links } = await useAsyncQuery(['links.list', { uuid: uuid.value }]);
const { copy } = useClipboard();

async function createLink(data: { url: string }) {
  const result = await client.mutation('links.create', {
    uuid: uuid.value,
    url: data.url,
  });
  links.value.unshift(result);
  copy(`${config.BASE_URL}${result.id}`);
  reset('linkForm');
  window.scrollTo(0, 0);
}

async function deleteLink(item: Link) {
  await client.mutation('links.delete', {
    id: item.id,
  });
  links.value = links.value.filter((link) => link.id !== item.id);
}
</script>

<style scoped></style>
