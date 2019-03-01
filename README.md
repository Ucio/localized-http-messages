# localized-http-messages
A simple package giving you translated http messages.

## Current languages
- EN
- FR

## Usage
```js
const translator = require('@LoicTL/localized-http-messages')

let tr = new translator() // Default locale: en
console.log( tr.getMessage(418) )
// > I'm a teapot

tr.setLocale('fr')
console.log( tr.getMessage(418) )
// > Je suis une théière

console.log( tr.getMessage('418') )
// > Je suis une théière
```

Change default locale:
```js
let tr = new translator('fr')
console.log( tr.getMessage(418) )
// > Je suis une théière
tr.setLocale('en')
console.log( tr.getMessage(418) )
// > I'm a teapot
```

Unknown locale:
```js
let tr = new translator('azerty')
console.log( tr.getMessage(418) )
// > I'm a teapot
tr = new translator('fr')
tr.setLocale('azerty')
console.log( tr.getMessage(418) )
// > Je suis une théière
```

Unknown code:
```js
let tr = new translator()
console.log( tr.getMessage(999) )
// > 999
```

## Sources
- https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
- https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
- https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
- https://httpstatuses.com/
- https://www.loggly.com/blog/http-status-code-diagram/
- https://assiste.com/Codes_HTTP/index_01.html
- https://translate.google.com
