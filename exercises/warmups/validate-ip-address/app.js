function isValidIp(ip) {
    ip = ip.split(".");

    if (ip.length !== 4) {
        return false;
    }

    for (let i = 0; i < 4; i++) {
        if (isNaN(ip[i]) || ip[i] < 0 || ip[i] > 255) {
            return false;
        }
    }

    return true;
}

console.log(isValidIp("172.16.254.1")); // => true
console.log(isValidIp("172.16.254")); // => false
console.log(isValidIp("172.16.800.1")); // => false
console.log(isValidIp("panda.bear.puma.cat")); // => false
console.log(isValidIp("172.16.254.1")); // true
console.log(isValidIp("172.16.290.1")); // false
console.log(isValidIp("172.230.1")); // false
console.log(isValidIp("1ad.230.14.52")); // false
console.log(isValidIp("1.230.14.52")); // true
