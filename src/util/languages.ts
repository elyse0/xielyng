import { Language } from '@/types/translation';

const getLanguageDefaultCountry = (language: Language): string => {
  switch (language) {
    case Language.English:
      return 'uk';
    case Language.French:
      return 'france';
    case Language.Spanish:
      return 'spain';
    default:
      return '';
  }
};

// eslint-disable-next-line import/prefer-default-export
export { getLanguageDefaultCountry };
