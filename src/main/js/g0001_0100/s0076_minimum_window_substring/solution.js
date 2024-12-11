// #Hard #Top_100_Liked_Questions #Top_Interview_Questions #String #Hash_Table #Sliding_Window
// #Level_2_Day_14_Sliding_Window/Two_Pointer #Big_O_Time_O(s.length())_Space_O(1)
// #2024_12_11_Time_4_ms_(99.86%)_Space_51.7_MB_(98.27%)

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const map = new Array(128).fill(0)

    // Populate the map with the characters of `t`
    for (let i = 0; i < t.length; i++) {
        map[t.charCodeAt(i)]++
    }

    let count = t.length
    let begin = 0
    let end = 0
    let d = Number.MAX_VALUE
    let head = 0

    while (end < s.length) {
        // Decrease count for characters in `s` found in `t`
        if (map[s.charCodeAt(end++)]-- > 0) {
            count--
        }

        // When all characters of `t` are matched
        while (count === 0) {
            if (end - begin < d) {
                d = end - begin
                head = begin
            }
            // Move the `begin` pointer and update the map
            if (map[s.charCodeAt(begin++)]++ === 0) {
                count++
            }
        }
    }

    return d === Number.MAX_VALUE ? "" : s.substring(head, head + d)
};

export { minWindow }
