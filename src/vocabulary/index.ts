import { Language } from '@/types/translation';
import { VocabularyItem } from '@/types/vocabulary';

const vocabulary: VocabularyItem[] = [
  {
    hanzi: '梦',
    pinyin: 'mèng',
    translations: [
      { language: Language.English, text: 'dream' },
      { language: Language.French, text: 'rêve' },
      { language: Language.Spanish, text: 'soñar' },
    ],
    audioUrl: 'https://www.purpleculture.net/mp3/meng4.mp3',
    imageUrl: 'https://storage.googleapis.com/amish/drawing.svg',
  },
  {
    hanzi: '一',
    pinyin: 'yī',
    translations: [
      { language: Language.English, text: 'one' },
      { language: Language.French, text: 'un' },
      { language: Language.Spanish, text: 'uno' },
    ],
    audioUrl: 'https://www.purpleculture.net/mp3/meng4.mp3',
  },
];

export default vocabulary;
