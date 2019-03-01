const translator = require('./index')


let tr = new translator() // Default locale: en
console.log( tr.getMessage(418) )
// > I'm a teapot

tr.setLocale('fr')
console.log( tr.getMessage(418) )
// > Je suis une théière

console.log( tr.getMessage('418') )
// > Je suis une théière

// Change default locale
tr = new translator('fr')
console.log( tr.getMessage(418) )
// > Je suis une théière
tr.setLocale('en')
console.log( tr.getMessage(418) )
// > I'm a teapot

// Unknown locale
tr = new translator('azerty')
console.log( tr.getMessage(418) )
// > I'm a teapot
tr = new translator('fr')
tr.setLocale('azerty')
console.log( tr.getMessage(418) )
// > Je suis une théière

// Unknown code
tr = new translator()
console.log( tr.getMessage(999) )
// > 999
