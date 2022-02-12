import { YoutubeVideo } from '@/types/youtube-videos';

import jmoe4Fz0sBY from './subtitles-jmoe4Fz0sBY.json';
import GNK7rPdabu8 from './subtitles-GNK7rPdabu8.json';

const youtubeVideos: Record<string, YoutubeVideo> = {
  jmoe4Fz0sBY: {
    title: '【VLOG in Chinese】Off to the US!',
    thumbnailUrl: 'http://i3.ytimg.com/vi/jmoe4Fz0sBY/hqdefault.jpg',
    captions: jmoe4Fz0sBY,
  },
  GNK7rPdabu8: {
    title: '【VLOG in Chinese】ROOM TOUR 2021',
    thumbnailUrl: 'http://i3.ytimg.com/vi/GNK7rPdabu8/hqdefault.jpg',
    captions: GNK7rPdabu8,
  },
};

export default youtubeVideos;
