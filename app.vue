<template>
  <div>
    <NuxtLoadingIndicator color="blue" :duration="1000" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <UNotifications />
    <UModals />
  </div>
</template>
