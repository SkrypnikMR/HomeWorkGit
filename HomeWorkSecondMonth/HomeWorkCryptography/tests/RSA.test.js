import { keyGenerate, encryption, decryption } from '../src/js/RSA.js';

describe('keyGenerate', () => {
    it('should be defined', () => {
        expect(keyGenerate).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof keyGenerate).toBe('function');
    })
    it('should return array of key and not str', () => {
        const p = 135572;
        const q = 2579;
        const e = 3;
        expect(keyGenerate(p, q, e)).toEqual([[3, 349640188], [233001359, 349640188]]);
        expect(keyGenerate(p, q, e)).not.toBe('someStr');
    })
    it('should return array of key and not object', () => {
        const p = 3407;
        const q = 197;
        const e = 3;
        expect(keyGenerate(p, q, e)).toEqual([[3, 671179], [445051, 671179]]);
        expect(keyGenerate(p, q, e)).not.toEqual({ p, q, e });
    })
    it('should return array of key and not number', () => {
        const p = 2843;
        const q = 1913;
        const e = 3;
        expect(keyGenerate(p, q, e)).toEqual([[3, 5438659], [3622603, 5438659]]);
        expect(keyGenerate(p, q, e)).not.toBe(45023012312893612397612312312);
    })
    it('should return array of key and be array!', () => {
        const p = 1031;
        const q = 89;
        const e = 3;
        expect(keyGenerate(p, q, e)).toEqual([[3, 91759], [60427, 91759]]);
        expect(Array.isArray(keyGenerate(p, q, e))).toBe(true);
    })

});
describe('encryption', () => {
    it('should be defined', () => {
        expect(encryption).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof encryption).toBe('function');
    })
    it('should return not to be string', () => {
        const allKeys = keyGenerate(3557, 2579, 3);
        const publicKey = allKeys[0];
        expect(encryption(99, publicKey)).not.toBe('970299');
    })
    it('should return not to be object', () => {
        const allKeys = keyGenerate(3557, 2579, 3);
        const publicKey = allKeys[0];
        expect(encryption(99, publicKey)).not.toBe({ return: 970299 });
    })
    it('should return not array', () => {
        const allKeys = keyGenerate(3557, 2579, 3);
        const publicKey = allKeys[0];
        expect(Array.isArray(encryption(99, publicKey))).not.toBe(true);
    })
    it('should return encrypt number', () => {
        const allKeys = keyGenerate(3557, 2579, 3);
        const publicKey = allKeys[0];
        expect(encryption(99, publicKey)).toBe(970299);
    })
    it('should return encrypt number', () => {
        const allKeys = keyGenerate(3557, 2579, 3);
        const message = 99;
        const publicKey = allKeys[0];
        expect(encryption(message, publicKey)).toBe(Math.pow(message, publicKey[0]) % publicKey[1]);
    })
    it('should encrypt in rules, and we decrypt if we have privateKey', () => {
        const allKeys = keyGenerate(3557, 2579, 3);
        const message = 99;
        const publicKey = allKeys[0];
        const privatKey = allKeys[1];
        const encryptedMessage = encryption(message, publicKey);
        expect(decryption(encryptedMessage, privatKey)).toBe(message);
    })
});
describe('decryption', () => {
    it('should be defined', () => {
        expect(decryption).toBeDefined();
    })
    it('should be function', () => {
        expect(typeof decryption).toBe('function');
    })
    it('should right decryption work if we have private key', () => {
        const allKeys = keyGenerate(3557, 2579, 3);
        const message = 99;
        const publicKey = allKeys[0];
        const privatKey = allKeys[1];
        const encryptedMessage = encryption(message, publicKey);
        expect(decryption(encryptedMessage, privatKey)).toBe(message);
    })
    it('should return right message if we try encrypt and decrypt more than 1 try', () => {
        const allKeys = keyGenerate(3557, 2579, 3);
        const message = 99;
        const publicKey = allKeys[0];
        const privatKey = allKeys[1];
        const encFirstTry = encryption(message, publicKey);
        const decFirstTry = decryption(encFirstTry, privatKey);
        const encSecondTry = encryption(decFirstTry, publicKey);
        const decSecondTry = decryption(encSecondTry, privatKey);
        expect(encFirstTry).toBe(encSecondTry);
        expect(decFirstTry).toBe(decSecondTry);
        expect(decSecondTry).toBe(message);
    })
});