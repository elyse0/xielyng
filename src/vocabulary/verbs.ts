import { Language } from '@/types/translation';
import { VocabularyItem } from '@/types/vocabulary';

const verbs: VocabularyItem[] = [
  {
    category: 'verbs',
    hanzi: '吃',
    pinyin: 'chī',
    translations: [
      { language: Language.English, text: 'to eat' },
      { language: Language.French, text: 'manger' },
      { language: Language.Spanish, text: 'comer' },
    ],
    audioUrl: 'https://xielyng.s3.fr-par.scw.cloud/audios/chi1.mp3',
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/to-eat.png',
  },
  {
    category: 'verbs',
    hanzi: '睡觉',
    pinyin: 'shuì​jiào',
    translations: [
      { language: Language.English, text: 'to sleep' },
      { language: Language.French, text: 'dormir' },
      { language: Language.Spanish, text: 'dormir' },
    ],
    audioUrl: 'https://xielyng.s3.fr-par.scw.cloud/audios/chi1.mp3',
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/to-sleep.png',
  },
];

export default verbs;
