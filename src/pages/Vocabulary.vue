<template>
  <AppLayout>
    <div class="vocabulary">

      <div v-for="(vocabularyItem) in vocabulary" :key="vocabularyItem.hanzi">
        <AppVocabularyCard :vocabulary-item="vocabularyItem"/>
      </div>

    </div>
  </AppLayout>
</template>

<script setup lang="ts">
import AppLayout from '@/components/layout/AppLayout.vue';
import AppVocabularyCard from '@/components/AppVocabularyCard.vue';

import vocabulary from '@/vocabulary';
</script>

<style scoped>

</style>
