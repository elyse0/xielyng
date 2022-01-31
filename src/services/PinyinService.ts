import { HanziTools, pinyinify } from 'hanzi-tools';

class PinyinService {
  public static getPinyinText(chineseSimplifiedText: string): string | HanziTools.PinyinDetails {
    return pinyinify(chineseSimplifiedText, true);
  }
}

export default PinyinService;
