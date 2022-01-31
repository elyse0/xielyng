<template>
  <div class="homepage">

    <div v-for="(vocabularyItem) in vocabulary" :key="vocabularyItem.hanzi">
      <AppVocabularyCard :vocabulary-item="vocabularyItem"/>
    </div>

  </div>
</template>

<script setup lang="ts">
import vocabulary from '@/vocabulary';

import AppVocabularyCard from '@/components/AppVocabularyCard.vue';
</script>

<style scoped>

</style>
