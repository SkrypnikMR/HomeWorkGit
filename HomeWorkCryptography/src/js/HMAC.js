export function hmac(k, text){
    let k0=k
    while(k0.length<64){
        k0=k0.concat('0')
    }

    return k0
}

