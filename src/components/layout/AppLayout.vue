<template>
  <div class="app-layout">
    <AppNavbar></AppNavbar>
    <div class="app-content">
      <slot/>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script setup lang="ts">

import AppNavbar from '@/components/layout/AppNavbar.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
</script>

<style scoped>
div.app-content {
  padding: 5px;
  min-height: 90vh;
}
</style>
