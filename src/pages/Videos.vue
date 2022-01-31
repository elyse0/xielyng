<template>
  <div class="videos">

    <div class="youtube-videos">
      <div v-for="(video) in youtubeVideosArray" :key="video.id">
        <o-button tag="router-link"
                  :to="`/videos/youtube/${video.id}`"
                  type="is-link">
          {{ video.title }}
        </o-button>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import YoutubeVideos from '@/youtube-videos';

const youtubeVideosArray = Object.keys(YoutubeVideos)
  .map((id) => ({ id, ...YoutubeVideos[id] }));
</script>

<style scoped>

</style>
