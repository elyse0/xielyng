<template>
  <div class="app-layout">
    <AppNavbar></AppNavbar>
    <div class="app-content">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">

import AppNavbar from '@/components/layout/AppNavbar.vue';
</script>

<style scoped>
div.app-content {
  padding: 5px;
}
</style>
