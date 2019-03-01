class Translator {
    constructor(defaultLocale) {
        let knownLocales = [
            'en',
            // 'zn', // TODO
            // 'es', // TODO
            // 'ru', // TODO
            'fr',
            // 'de', // TODO
            // 'pt', // TODO
            // 'ko', // TODO
            // 'ja', // TODO
            // 'it', // TODO
        ]
        let defaultLocaleConfig = 'en'
        if (defaultLocale && knownLocales.indexOf(defaultLocale) !== -1) {
            defaultLocaleConfig = defaultLocale
        }
        this.i18n = new (require('i18n-2'))({
            // setup some locales - other locales default to the first locale
            locales: knownLocales,
            extension: '.json',
            defaultLocale: defaultLocaleConfig,
            devMode: false
        })
    }

    setLocale(locale) {
        this.i18n.setLocale(locale)
    }

    getMessage(httpCode) {
        return this.i18n.__(`${httpCode}`)
    }
}

module.exports = Translator