/**
 * Validate IP
 *
 * An IP address is a numerical label assigned to each
 * device (e.g., computer, printer) participating in a
 * computer network that uses the Internet Protocol for
 * communication. There are two versions of the Internet
 * protocol, and thus two versions of addresses. One of
 * them is the IPv4 address.
 * 
 * IPv4 addresses are represented in dot-decimal notation,
 * which consists of four decimal numbers, each ranging from
 * 0 to 255, separated by dots, e.g., 172.16.254.1
 * 
 * Given a string, write a function that determines whether it
 * is a valid IP address.
 *
 * @link https://coursework.vschool.io/validate-ip-address/
 */
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
