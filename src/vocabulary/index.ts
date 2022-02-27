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
];

export default vocabulary;
