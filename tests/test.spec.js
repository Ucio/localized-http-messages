import test from 'ava'

test('Default locale', test => {
    let translator = require('../src/index')
    let tr = new translator()
    test.is(tr.getMessage(418), "I'm a teapot")
    test.is(tr.getMessage('418'), "I'm a teapot")
})

test('Change locale', test => {
    let translator = require('../src/index')
    let tr = new translator()
    test.is(tr.getMessage(418), "I'm a teapot")
    tr.setLocale('fr')
    test.is(tr.getMessage(418), "Je suis une théière")
})

test('Change default locale', test => {
    let translator = require('../src/index')
    let tr = new translator('fr')
    test.is(tr.getMessage(418), "Je suis une théière")
    tr.setLocale('en')
    test.is(tr.getMessage(418), "I'm a teapot")
})

test('Unknown locale', test => {
    let translator = require('../src/index')
    let tr = new translator()
    test.is(tr.getMessage(418), "I'm a teapot")
    tr.setLocale('azerty')
    test.is(tr.getMessage(418), "I'm a teapot")
})

test('Unknown default locale', test => {
    let translator = require('../src/index')
    let tr = new translator('azerty')
    test.is(tr.getMessage(418), "I'm a teapot")
})

test('Unknown code', test => {
    let translator = require('../src/index')
    let tr = new translator()
    test.is(tr.getMessage(999), "999")
})