<template>
  <AppCard>
    <template v-slot:media-left v-if="props.vocabularyItem.imageUrl">
      <img :src="props.vocabularyItem.imageUrl" alt="image">
    </template>

    <template v-slot:media-content>

      <AppPinyinText class="has-text-centered" :pinyin="props.vocabularyItem.pinyin"/>

      <AppHanziView :hanzi="props.vocabularyItem.hanzi"/>

      <AppPinyinTranslation :translations="props.vocabularyItem.translations"/>

      <AppPinyinAudio v-if="props.vocabularyItem.audioUrl" :url="props.vocabularyItem.audioUrl"/>

    </template>
  </AppCard>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import { VocabularyItem } from '@/types/vocabulary';

import AppCard from '@/components/ui/AppCard.vue';
import AppHanziView from '@/components/AppHanziView.vue';
import AppPinyinText from '@/components/AppPinyinText.vue';
import AppPinyinAudio from '@/components/AppPinyinAudio.vue';
import AppPinyinTranslation from '@/components/AppPinyinTranslation.vue';

interface Props {
  vocabularyItem: VocabularyItem;
}

const props = defineProps<Props>();
</script>

<style scoped>
div.media-left > img {
  max-height: 300px;
  max-width: 220px;
}
</style>
