import { TranslationItem } from '@/types/translation';

interface ChineseLearningItem {
  hanzi: string;
  pinyin: string;
  translations: TranslationItem[]
  audioUrl?: string
}

interface VocabularyItem extends ChineseLearningItem {
  imageUrl?: string
}

type PhraseItem = ChineseLearningItem

export { VocabularyItem, PhraseItem };
