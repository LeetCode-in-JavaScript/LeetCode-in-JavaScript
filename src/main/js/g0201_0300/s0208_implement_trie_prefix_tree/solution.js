
// #Medium #Top_100_Liked_Questions #Top_Interview_Questions #String #Hash_Table #Design #Trie
// #Level_2_Day_16_Design #Udemy_Trie_and_Heap
// #Big_O_Time_O(word.length())_or_O(prefix.length())_Space_O(N)
// #2024_12_17_Time_39_ms_(93.97%)_Space_66.4_MB_(88.79%)

var Trie = function() {
    this.root = {} // Initialize root node as an empty object
}

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        if (!node[char]) {
            node[char] = {} // Create a new node if it doesn't exist
        }
        node = node[char] // Move to the next node
    }
    node.isWord = true // Mark the node as a word endpoint
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root
    for (let i = 0; i < word.length; i++) {
        const char = word[i]
        if (!node[char]) {
            return false // Word doesn't exist
        }
        node = node[char] // Move to the next node
    }
    return node.isWord === true // Return true if it's a complete word
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root
    for (let i = 0; i < prefix.length; i++) {
        const char = prefix[i]
        if (!node[char]) {
            return false // Prefix doesn't exist
        }
        node = node[char] // Move to the next node
    }
    return true // Return true if prefix exists
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

export { Trie }
