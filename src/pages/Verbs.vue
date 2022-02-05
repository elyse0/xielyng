<template>
  <div class="verbs">

    <div v-for="(verb, index) in verbs" :key="index">
      <AppVocabularyCard :vocabulary-item="verb"/>
    </div>

  </div>
</template>

<script setup lang="ts">
import verbs from '@/vocabulary/verbs';

import AppVocabularyCard from '@/components/AppVocabularyCard.vue';
</script>

<style scoped>

</style>
