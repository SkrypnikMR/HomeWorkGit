const crypto = require('crypto').webcrypto

async function HMAC(key, message) {
    const g = str => new Uint8Array([...unescape(encodeURIComponent(str))].map(c => c.charCodeAt(0))),
        k = g(key),
        m = g(message),
        c = await crypto.subtle.importKey('raw', k, { name: 'HMAC', hash: 'SHA-256' }, true, ['sign']),
        s = await crypto.subtle.sign('HMAC', c, m);
    [...new Uint8Array(s)].map(b => b.toString(16).padStart(2, '0')).join('');
    return btoa(String.fromCharCode(...new Uint8Array(s)))
}

HMAC("mypassword", "Hello world!").then(e => console.log(e))