import Vue from 'vue'
import VueI18n from 'vue-i18n'
import uk from './locales/uk.json'

Vue.use(VueI18n)

const translations = {
  uk: uk
}

const messages = Object.assign(translations)

const i18n = new VueI18n({
  // locale: 'uk',
  messages,
  silentTranslationWarn: true //process.env.NODE_ENV === 'production'
})

export default i18n
