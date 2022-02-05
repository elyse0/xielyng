<template>
  <div class="hanzi-view">
    <div class="item" v-for="item in hanziItems" :key="item.id" :id="item.id"/>
  </div>
</template>

<script setup lang="ts">
import { defineProps, onMounted } from 'vue';

import HanziWriter from 'hanzi-writer';
import { getOnlyLettersUuid } from '@/util/uuid';

interface Props {
  hanzi: string;
}

const props = defineProps<Props>();

const hanziItems = Array.from(props.hanzi)
  .map((item) => ({
    id: getOnlyLettersUuid(),
    hanzi: item,
  }));

// FIXME: Find a better way to compute the scale when there are more than two hanzi symbols
const scale = (-0.2 * hanziItems.length * hanziItems.length) + (0.6 * hanziItems.length) + 0.6;

onMounted(() => {
  hanziItems.forEach((item) => {
    HanziWriter.create(item.id, item.hanzi, {
      width: 170,
      height: 170,
      padding: 5,
      radicalColor: '#168F16',
    });
  });
});
</script>

<style scoped>
div.hanzi-view {
  display: flex;
  justify-content: center;
  width: 300px;
  scale: v-bind(scale);
}
</style>
