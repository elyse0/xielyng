import { getSubtitles } from 'node-youtube-subtitles';

const test = async () => {
  const sub = await getSubtitles('https://www.youtube.com/watch?v=_GBw7lBfMkM', {});
  // eslint-disable-next-line no-console
  console.log(sub);
  // eslint-disable-next-line no-console
  console.log('Hola');
};

test();
