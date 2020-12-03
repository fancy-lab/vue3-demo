import { createI18n } from 'vue-i18n';

import en from './en';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  // missing: missingHandler,
  messages: { en },
  // silentTranslationWarn: true,
});

export default i18n;
