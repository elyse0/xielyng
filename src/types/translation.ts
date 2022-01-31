// eslint-disable-next-line no-shadow
export enum Language {
  English = 'english',
  French = 'french',
  Spanish = 'spanish'
}

export interface TranslationItem {
  language: Language
  text: string
}
