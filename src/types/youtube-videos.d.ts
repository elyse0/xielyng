export interface Caption {
  start: number,
  end: number,
  pinyin: string,
  'zh-Hans': string,
  en: string
}

export interface YoutubeVideo {
  title: string,
  captions: Caption[]
}
