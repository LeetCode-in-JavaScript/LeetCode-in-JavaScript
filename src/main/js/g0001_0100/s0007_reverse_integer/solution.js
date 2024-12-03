// #Medium #Top_Interview_Questions #Math #Udemy_Integers
// #2024_12_03_Time_66_ms_(87.91%)_Space_52_MB_(94.57%)

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let r = x;
    if (r < 0) {
        r = r.toString().split('')
        let a = r.shift()
        r.reverse()
        r.unshift('-')

        if (Number(r.join('')) > -2147483647) {
            return Number(r.join(''));
        }
    }
    let reverseN = Number(r.toString().split('').reverse().join(''))
    return reverseN < 2147483647 ? reverseN : 0
};

export { reverse }
