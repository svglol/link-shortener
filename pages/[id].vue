<template>
  <div class="w-screen h-screen flex justify-center">
    <div class="spinner-box m-auto">
      <div class="pulse-container">
        <div class="pulse-bubble pulse-bubble-1"></div>
        <div class="pulse-bubble pulse-bubble-2"></div>
        <div class="pulse-bubble pulse-bubble-3"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'blank',
});
const route = useRoute();
const client = useClient();
const link = await client.query('links.get', { id: String(route.params.id) });
if (!link) {
  throwError(createError({ statusCode: 404, statusMessage: 'Page Not Found' }));
}
onBeforeMount(() => {
  if (link) {
    window.location.replace(link.url);
  }
});
</script>

<style>
.spinner-box {
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}

.pulse-container {
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pulse-bubble {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #ffffff;
}

.pulse-bubble-1 {
  animation: pulse 0.4s ease 0s infinite alternate;
}
.pulse-bubble-2 {
  animation: pulse 0.4s ease 0.2s infinite alternate;
}
.pulse-bubble-3 {
  animation: pulse 0.4s ease 0.4s infinite alternate;
}

@keyframes pulse {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0.25;
    transform: scale(0.75);
  }
}
</style>
