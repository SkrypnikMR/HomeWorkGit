export const keyGenerate = (p, q, e) => {
    let n = p * q;
    let eilerFunc = (p - 1) * (q - 1);
    let d;
    for (let k = 1; ; k++) {
        if (Number.isInteger(Math.pow(e, -1) * (eilerFunc * k + 1))) {
            d = Math.pow(e, -1) * (eilerFunc * k + 1);
            break;
        }
    }
    return [[e, n], [d, n]];
};

export const encryption = (message, key) => Math.pow(message, key[0]) % key[1];
export const decryption = (message, key) => {
    let decrypt = 1;
    for (let i = 0; i < key[0]; i++) decrypt = (decrypt * message) % key[1];
    return decrypt;
}
