const path  = require('path')
const fs    = require('fs')

class Translator {
    constructor(locale) {
        this.setLocale(locale)
        let defaultLocale = 'en'
        this.jsonFallback = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../locales', `${defaultLocale}.json`)))
        this.jsonLastLocaleFallback = {}
    }

    setLocale(locale) {
        if (typeof locale === 'object' && locale !== null) {
            this.jsonLastLocaleFallback = this.json
            this.locale = 'custom'
            this.json = locale
        } else {
            let localeName = _getLocaleNameIfExists(locale)
            if (localeName || !this.locale) {
                this.jsonLastLocaleFallback = this.json
                this.locale = localeName || 'en'
                this.json = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../locales', `${this.locale}.json`)))
            }
        }
    }

    getMessage(httpCode) {
        return this.json[httpCode] || this.jsonLastLocaleFallback[httpCode] || this.jsonFallback[httpCode] || `${httpCode}`
    }
}

function _getLocaleNameIfExists(localeName) {
    if (localeName) {
        let filePath = path.resolve(__dirname, '../locales', `${localeName}.json`)
        if (_checkIfExists(filePath)) {
            return localeName
        }
    }
    return null
}

function _checkIfExists(filePath) {
    try {
        fs.accessSync(filePath)
        return true
    } catch {
        return false
    }
}

module.exports = Translator