<template>
  <div class="hanzi-view has-text-centered">
    <div :id="uuid"></div>
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
const uuid = getOnlyLettersUuid();

onMounted(() => {
  HanziWriter.create(uuid, props.hanzi, {
    width: 170,
    height: 170,
    padding: 5,
    radicalColor: '#168F16',
  });
});
</script>

<style scoped>
</style>
