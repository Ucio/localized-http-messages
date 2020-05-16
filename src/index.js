const path  = require('path')
const fs    = require('fs')

class Translator {
    constructor(locale) {
        let defaultLocale = 'en'

        this.json = {}
        this.jsonFallback = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../locales', `${defaultLocale}.json`)))
        this.jsonLastLocaleFallback = {}
        
        this.setLocale(locale)
    }

    setLocale(locale) {
        if (_isJsObject(locale)) {
            this.jsonLastLocaleFallback = this.json
            this.json = locale
        } else {
            let localeName = _getLocaleNameIfExists(locale)
            if (localeName) {
                this.jsonLastLocaleFallback = this.json
                this.json = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../locales', `${localeName}.json`)))
            }
        }
    }

    getMessage(httpCode) {
        return this.json[httpCode] || this.jsonLastLocaleFallback[httpCode] || this.jsonFallback[httpCode] || `${httpCode}`
    }
}

function _isJsObject(value) {
    return typeof value === 'object' && value !== null
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