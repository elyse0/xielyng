import { Language } from '@/types/translation';
import { PhraseItem } from '@/types/vocabulary';

const phrases: PhraseItem[] = [
  {
    hanzi: '再见',
    pinyin: 'zài jiàn',
    translations: [
      { language: Language.English, text: 'Goodbye' },
      { language: Language.Spanish, text: 'Adios' },
      { language: Language.French, text: 'Au revoir' },
    ],
    audioUrl: '',
  },
  {
    hanzi: '拜拜',
    pinyin: 'bài bài',
    translations: [
      { language: Language.English, text: 'Bye' },
      { language: Language.Spanish, text: 'Adios' },
      { language: Language.French, text: 'Au revoir' },
    ],
    audioUrl: '',
  },
  {
    hanzi: '你慢慢來',
    pinyin: 'nǐ màn màn lái',
    translations: [
      { language: Language.English, text: 'Take your time' },
      { language: Language.Spanish, text: 'Tomate tu tiempo' },
      { language: Language.French, text: 'Prends ton temps' },
    ],
    audioUrl: '',
  },
  {
    hanzi: '沒錯',
    pinyin: 'méi cuò',
    translations: [
      { language: Language.English, text: 'Exactly' },
      { language: Language.Spanish, text: 'Exactamente' },
      { language: Language.French, text: 'Exactement' },
    ],
    audioUrl: '',
  },
  {
    hanzi: '幹嘛',
    pinyin: 'gān má',
    translations: [
      { language: Language.English, text: 'What?' },
      { language: Language.Spanish, text: 'What?' },
      { language: Language.French, text: 'What?' },
    ],
    audioUrl: '',
  },
  {
    hanzi: '等一下',
    pinyin: 'děng yī xià',
    translations: [
      { language: Language.English, text: 'Wait a second' },
      { language: Language.Spanish, text: 'Espera un segundo' },
      { language: Language.French, text: 'Attends une seconde' },
    ],
    audioUrl: '',
  },
  {
    hanzi: '你在干嘛?',
    pinyin: 'nǐ zài gān má',
    translations: [
      { language: Language.English, text: 'What are you doing?' },
      { language: Language.Spanish, text: '¿Qué estás haciendo?' },
      { language: Language.French, text: 'Qu\'est-ce que tu fais?' },
    ],
    audioUrl: '',
  },
  {
    hanzi: '那就好',
    pinyin: 'nà jiù hǎo',
    translations: [
      { language: Language.English, text: 'That\'s good' },
      { language: Language.Spanish, text: 'Eso es bueno' },
      { language: Language.French, text: 'C\'est bien' },
    ],
    audioUrl: '',
  },
  {
    hanzi: '麻煩你了',
    pinyin: 'má fán nǐ liǎo',
    translations: [
      { language: Language.English, text: 'Sorry for disturbing you' },
      { language: Language.Spanish, text: 'Perdón por molestarte' },
      { language: Language.French, text: 'Désolé pour te déranger' },
    ],
    audioUrl: '',
  },
  {
    hanzi: '我先走了',
    pinyin: 'wǒ xiān zǒu liǎo',
    translations: [
      { language: Language.English, text: 'I\'m leaving' },
      { language: Language.Spanish, text: 'Ya me voy' },
      { language: Language.French, text: 'Je pars' },
    ],
    audioUrl: '',
  },
  {
    hanzi: '有空再約',
    pinyin: 'yǒu kōng zài yuē',
    translations: [
      { language: Language.English, text: 'We should hang out again sometime' },
      { language: Language.Spanish, text: 'Deberíamos volver a salir alguna vez' },
      { language: Language.French, text: 'Nous devrions sortir à nouveau un jour' },
    ],
    audioUrl: '',
  },
];

export default phrases;
