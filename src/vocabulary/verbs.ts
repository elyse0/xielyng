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
  {
    category: 'verbs',
    hanzi: '吐',
    pinyin: 'tǔ',
    translations: [
      { language: Language.English, text: 'to throw up' },
      { language: Language.French, text: 'vomir' },
      { language: Language.Spanish, text: 'vomitar' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/to-throw-up.png',
  },
  {
    category: 'verbs',
    hanzi: '去',
    pinyin: 'qù',
    translations: [
      { language: Language.English, text: 'to go' },
      { language: Language.French, text: 'aller' },
      { language: Language.Spanish, text: 'go' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/to-go.png',
  },
  {
    category: 'verbs',
    hanzi: '追踪',
    pinyin: 'zhuī​zōng',
    translations: [
      { language: Language.English, text: 'to follow' },
      { language: Language.French, text: 'suivre' },
      { language: Language.Spanish, text: 'seguir' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/to-follow.png',
  },
  {
    category: 'verbs',
    hanzi: '知道',
    pinyin: 'zhī​dào',
    translations: [
      { language: Language.English, text: 'to know' },
      { language: Language.French, text: 'savoir' },
      { language: Language.Spanish, text: 'saber' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/to-know.png',
  },
  {
    category: 'verbs',
    hanzi: '报名',
    pinyin: 'bào​míng',
    translations: [
      { language: Language.English, text: 'to sign up' },
      { language: Language.French, text: "s'inscrire" },
      { language: Language.Spanish, text: 'registrarse' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/to-signup.png',
  },
  {
    category: 'verbs',
    hanzi: '觉得',
    pinyin: 'jué​de',
    translations: [
      { language: Language.English, text: 'to think of' },
      { language: Language.French, text: 'en penser' },
      { language: Language.Spanish, text: 'pensar algo' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/to-think.png',
  },
];

export default verbs;
