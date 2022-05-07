import { Language } from '@/types/translation';
import { VocabularyItem } from '@/types/vocabulary';

const vocabulary: VocabularyItem[] = [
  {
    category: 'general',
    hanzi: '梦',
    pinyin: 'mèng',
    translations: [
      { language: Language.English, text: 'dream' },
      { language: Language.French, text: 'rêve' },
      { language: Language.Spanish, text: 'sueño' },
    ],
    audioUrl: 'https://www.purpleculture.net/mp3/meng4.mp3',
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/dream.png',
  },
  {
    category: 'house',
    hanzi: '房间',
    pinyin: 'fáng​jiān',
    translations: [
      { language: Language.English, text: 'room' },
      { language: Language.French, text: 'chambre' },
      { language: Language.Spanish, text: 'habitación' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/room.png',
    audioUrl: 'https://www.purpleculture.net/mp3/meng4.mp3',
  },
  {
    category: 'house',
    hanzi: '门',
    pinyin: 'mén',
    translations: [
      { language: Language.English, text: 'door' },
      { language: Language.French, text: 'porte' },
      { language: Language.Spanish, text: 'puerta' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/door.png',
  },
  {
    category: 'house',
    hanzi: '电灯',
    pinyin: 'diàn​dēng',
    translations: [
      { language: Language.English, text: 'electric light' },
      { language: Language.French, text: 'lumière électrique' },
      { language: Language.Spanish, text: 'luz eléctrica' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/electric-light.png',
  },
  {
    category: 'house',
    hanzi: '开关',
    pinyin: 'kāi​guān',
    translations: [
      { language: Language.English, text: 'switch' },
      { language: Language.French, text: 'interrupteur' },
      { language: Language.Spanish, text: 'interruptor' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/switch.png',
  },
  {
    category: 'beauty',
    hanzi: '镜子',
    pinyin: 'jìng​zi',
    translations: [
      { language: Language.English, text: 'mirror' },
      { language: Language.French, text: 'miroir' },
      { language: Language.Spanish, text: 'espejo' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/mirror.png',
  },
  {
    category: 'numbers',
    hanzi: '一',
    pinyin: 'yī',
    translations: [
      { language: Language.English, text: 'one' },
      { language: Language.French, text: 'un' },
      { language: Language.Spanish, text: 'uno' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/one.png',
  },
  {
    category: 'numbers',
    hanzi: '二',
    pinyin: 'èr',
    translations: [
      { language: Language.English, text: 'two' },
      { language: Language.French, text: 'deux' },
      { language: Language.Spanish, text: 'dos' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/two.png',
  },
  {
    category: 'numbers',
    hanzi: '三',
    pinyin: 'sān',
    translations: [
      { language: Language.English, text: 'three' },
      { language: Language.French, text: 'trois' },
      { language: Language.Spanish, text: 'tres' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/three.png',
  },
  {
    category: 'numbers',
    hanzi: '四',
    pinyin: 'sì',
    translations: [
      { language: Language.English, text: 'four' },
      { language: Language.French, text: 'quatre' },
      { language: Language.Spanish, text: 'cuatro' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/four.png',
  },
  {
    category: 'numbers',
    hanzi: '五',
    pinyin: 'wŭ',
    translations: [
      { language: Language.English, text: 'five' },
      { language: Language.French, text: 'cinq' },
      { language: Language.Spanish, text: 'cinco' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/five.png',
  },
  {
    category: 'numbers',
    hanzi: '六',
    pinyin: 'liù',
    translations: [
      { language: Language.English, text: 'six' },
      { language: Language.French, text: 'six' },
      { language: Language.Spanish, text: 'seis' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/six.png',
  },
  {
    category: 'numbers',
    hanzi: '七',
    pinyin: 'qī',
    translations: [
      { language: Language.English, text: 'seven' },
      { language: Language.French, text: 'sept' },
      { language: Language.Spanish, text: 'siete' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/seven.png',
  },
  {
    category: 'numbers',
    hanzi: '八',
    pinyin: 'bā',
    translations: [
      { language: Language.English, text: 'eight' },
      { language: Language.French, text: 'huit' },
      { language: Language.Spanish, text: 'ocho' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/eight.png',
  },
  {
    category: 'numbers',
    hanzi: '九',
    pinyin: 'jiŭ',
    translations: [
      { language: Language.English, text: 'nine' },
      { language: Language.French, text: 'neuf' },
      { language: Language.Spanish, text: 'nueve' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/nine.png',
  },
  {
    category: 'numbers',
    hanzi: '十',
    pinyin: 'shí',
    translations: [
      { language: Language.English, text: 'ten' },
      { language: Language.French, text: 'dix' },
      { language: Language.Spanish, text: 'diez' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/ten.png',
  },
  {
    category: 'city',
    hanzi: '车',
    pinyin: 'chē',
    translations: [
      { language: Language.English, text: 'car' },
      { language: Language.French, text: 'voiture' },
      { language: Language.Spanish, text: 'carro' },
    ],
    imageUrl: 'https://xielyng.s3.fr-par.scw.cloud/images/car.png',
  },
];

export default vocabulary;
