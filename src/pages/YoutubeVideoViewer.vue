<template>
  <div class="youtube-video-viewer">
    Videos!
    <AppYoutubePlayer v-if="videoId.length" @timeUpdate="onTimeUpdate" :videoId="videoId"/>

    <div v-if="youtubeVideo">
      <div class="caption-viewer">
        <div class="caption-chinese" v-if="currentSubtitle.captions">
          <AppChineseCaption
            :chinese="currentSubtitle.captions['zh-Hans']"
            :pinyin="currentSubtitle.captions.pinyin"
          />
        </div>
      </div>

      <div class="caption-list">
        <div v-for="(item) in youtubeVideo.captions" :key="item.start">
          Start: {{ item.start }}, End: {{ item.end }} - {{ item.captions['zh-Hans'] }} ->
          {{ item.captions.pinyin }}
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

import AppYoutubePlayer from '@/components/video/AppYoutubePlayer.vue';
import AppChineseCaption from '@/components/AppChineseCaption.vue';

import YoutubeVideos from '@/youtube-videos';

const videoId = ref('');

const youtubeVideo = ref(YoutubeVideos[videoId.value]);

const currentTime = ref(0);

const currentSubtitle = computed(() => {
  const currentTimeMs = currentTime.value * 1000;
  const subtitle = youtubeVideo.value.captions.filter((caption) => currentTimeMs > caption.start && currentTimeMs < caption.end);

  return subtitle.length ? subtitle[0] : {};
});

const onTimeUpdate = (timeUpdate: number): void => {
  currentTime.value = timeUpdate;
};

onMounted(() => {
  const route = useRoute();
  const id = route.params.videoId;
  console.log(`ID: ${id}`);
  if (typeof id === 'string') {
    videoId.value = id;
    youtubeVideo.value = YoutubeVideos[id];
  }
});
</script>

<style scoped>
div.caption-viewer {
  font-size: 30px;
  text-align: center;
}
</style>
