# localized-http-messages
A simple package giving you translated http messages.

[![npm bundle size](https://img.shields.io/bundlephobia/min/localized-http-messages)](https://bundlephobia.com/result?p=localized-http-messages)
[![Coverage Status](https://coveralls.io/repos/github/Ucio/localized-http-messages/badge.svg?branch=master)](https://coveralls.io/github/Ucio/localized-http-messages?branch=master)
[![dependencies Status](https://david-dm.org/ucio/localized-http-messages/status.svg)](https://david-dm.org/ucio/localized-http-messages)

[![devDependencies Status](https://david-dm.org/ucio/localized-http-messages/dev-status.svg)](https://david-dm.org/ucio/localized-http-messages?type=dev)
[![Maintainability](https://api.codeclimate.com/v1/badges/3e297645d11e00f814fa/maintainability)](https://codeclimate.com/github/Ucio/localized-http-messages/maintainability)

## Known locales
- `en` (english)
- `fr` (français)

You can send me translations in you're locale if you want it in the module!

## Basic usage
```js
const translator = require('localized-http-messages')

let tr = new translator('fr') // or a JS Object with translations
console.log( tr.getMessage(418) )
// > Je suis une théière
```

## API

### Constructor(String|JS Object)
The parameter is the locale to set. If no locale is set, it will fallback to `en`.

The behavior is the same than calling `setLocale` method.

### setLocale(String|JS Object)
Set the current locale.

If the parameter is a `String`, the module will try to find it in the list of known locale.
If the locale is not known, it is ignored.

If the parameter is a `JS Object`, the module will load the object as the current locale.
The object must be formatted like this:
```js
{
    code: "Message",
    code: "Message",
    etc.
}
```

Example:
```js
{
    404: "Custom message when not found",
    418: "Custom message for teapot"
}
```

### getMessage(Number|String)
Return the String of the code given in paramter.

If the code is not found in the current locale, it falls back to the previous locale set.
If the code is not found in the previous locale, it falls back to `en`.

If the code is not found in any of the locales, it return the code as a String.

Example:
```js
const translator = require('localized-http-messages')

let tr = new translator('fr')
tr.setLocale({
    404: 'Not found, sorry!'
})
console.log( tr.getMessage(404) )
// > Not found, sorry!
console.log( tr.getMessage(418) )
// > Je suis une théière
console.log( tr.getMessage(999) )
// > 999
```

## List of known codes
| Code    | English translation                   |
| :-----  | :------------------------------------ |
| 100     | Continue |
| 101     | Switching Protocols |
| 102     | Processing |
| 103     | Early Hints |
| 200     | OK |
| 201     | Created |
| 202     | Accepted |
| 203     | Non-Authoritative Information |
| 204     | No Content |
| 205     | Reset Content |
| 206     | Partial Content |
| 207     | Multi-Status |
| 208     | Already Reported |
| 210     | Content Different |
| 226     | IM Used |
| 300     | Multiple Choices |
| 301     | Moved Permanently |
| 302     | Found |
| 303     | See Other |
| 304     | Not Modified |
| 305     | Use Proxy |
| 306     | Switch Proxy |
| 307     | Temporary Redirect |
| 308     | Permanent Redirect |
| 310     | Too many Redirects |
| 400     | Bad Request |
| 401     | Unauthorized |
| 402     | Payment Required |
| 403     | Forbidden |
| 404     | Not Found |
| 405     | Method Not Allowed |
| 406     | Not Acceptable |
| 407     | Proxy Authentication Required |
| 408     | Request Timeout |
| 409     | Conflict |
| 410     | Gone |
| 411     | Length Required |
| 412     | Precondition Failed |
| 413     | Request Entity Too Large |
| 414     | Request-URI Too Long |
| 415     | Unsupported Media Type |
| 416     | Requested range unsatisfiable |
| 417     | Expectation failed |
| 418     | I'm a teapot |
| 421     | Bad mapping / Misdirected Request |
| 422     | Unprocessable entity |
| 423     | Locked |
| 424     | Method failure |
| 425     | Unordered Collection |
| 426     | Upgrade Required |
| 428     | Precondition Required |
| 429     | Too Many Requests |
| 431     | Request Header Fields Too Large |
| 449     | Retry With |
| 450     | Blocked by Windows Parental Controls |
| 451     | Unavailable For Legal Reasons |
| 456     | Unrecoverable Error |
| 444     | No Response |
| 495     | SSL Certificate Error |
| 496     | SSL Certificate Required |
| 497     | HTTP Request Sent to HTTPS Port |
| 498     | Token expired/invalid |
| 499     | Client Closed Request |
| 500     | Internal Server Error |
| 501     | Not Implemented |
| 502     | Bad Gateway |
| 503     | Service Unavailable |
| 504     | Gateway Timeout |
| 505     | HTTP Version not supported |
| 506     | Variant Also Negotiates |
| 507     | Insufficient storage |
| 508     | Loop detected |
| 509     | Bandwidth Limit Exceeded |
| 510     | Not extended |
| 511     | Network authentication required |
| 520     | Unknown Error |
| 521     | Web Server Is Down |
| 522     | Connection Timed Out |
| 523     | Origin Is Unreachable |
| 524     | A Timeout Occurred |
| 525     | SSL Handshake Failed |
| 526     | Invalid SSL Certificate |
| 527     | Railgun Error |


## Sources
- https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP
- https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
- https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
- https://httpstatuses.com/
- https://www.loggly.com/blog/http-status-code-diagram/
- https://assiste.com/Codes_HTTP/index_01.html
- https://translate.google.com
