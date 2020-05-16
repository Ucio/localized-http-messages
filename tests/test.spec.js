const test = require('ava')
let translator = require('../src/index')

test('Default locale', test => {
    let tr = new translator()
    test.is(tr.getMessage(418), "I'm a teapot")
    test.is(tr.getMessage('418'), "I'm a teapot")
})

test('Change locale', test => {
    let tr = new translator()
    test.is(tr.getMessage(418), "I'm a teapot")
    tr.setLocale('fr')
    test.is(tr.getMessage(418), "Je suis une théière")
})

test('Change locale idempotency', test => {
    let tr = new translator()
    tr.setLocale('fr')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    test.is(tr.getMessage(418), "Je suis une théière")
})

test('Change default locale', test => {
    let tr = new translator('fr')
    test.is(tr.getMessage(418), "Je suis une théière")
    tr.setLocale('en')
    test.is(tr.getMessage(418), "I'm a teapot")
})

test('Unknown locale', test => {
    let tr = new translator()
    test.is(tr.getMessage(418), "I'm a teapot")
    tr.setLocale('azerty')
    test.is(tr.getMessage(418), "I'm a teapot")
})

test('Unknown default locale', test => {
    let tr = new translator('azerty')
    test.is(tr.getMessage(418), "I'm a teapot")
})

test('Unknown code', test => {
    let tr = new translator()
    test.is(tr.getMessage(999), "999")
})

test('Custom default locale file', test => {
    let tr = new translator({
        418: 'Custom message for teapot'
    })
    test.is(tr.getMessage(418), "Custom message for teapot")
    test.is(tr.getMessage(404), "Not Found")
    tr.setLocale('en')
    test.is(tr.getMessage(418), "I'm a teapot")
    test.is(tr.getMessage(404), "Not Found")
})

test('Custom locale file', test => {
    let tr = new translator('fr')
    test.is(tr.getMessage(418), "Je suis une théière")
    test.is(tr.getMessage(404), "Non trouvé")
    tr.setLocale({
        418: 'Custom message for teapot'
    })
    test.is(tr.getMessage(418), "Custom message for teapot")
    test.is(tr.getMessage(404), "Non trouvé")
})

test('Custom locale replacement', test => {
    let tr = new translator()
    tr.setLocale({
        418: 'Custom message for teapot'
    })
    tr.setLocale('fr')
    test.is(tr.getMessage(418), "Je suis une théière")
})

test('Custom locale fallback', test => {
    let tr = new translator()
    tr.setLocale({
        888: 'Custom message!'
    })
    tr.setLocale('fr')
    test.is(tr.getMessage(418), "Je suis une théière")
    test.is(tr.getMessage(888), "Custom message!")
})

test('Custom locale file indepontency', test => {
    let tr = new translator('fr')
    tr.setLocale({
        418: 'Custom message for teapot'
    })
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    tr.setLocale('azerty')
    test.is(tr.getMessage(418), "Custom message for teapot")
    test.is(tr.getMessage(404), "Non trouvé")
})