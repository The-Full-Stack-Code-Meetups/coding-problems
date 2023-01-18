/* Problem 23
 *
 * This problem was asked by Airbnb.
Given a list of words, find all pairs of unique indices such that the concatenation of the two words is a palindrome.

For example, given the list ["code", "edoc", "da", "d"], return [[0, 1], [1, 0], [2, 3]].
 * 
 * */

function findPalindromePairs(words) {
    let result = []

    // Iterate through the words array
    for (let i = 0; i < words.length; i++) {
        // Iterate through the words array again
        for (let j = i + 1; j < words.length; j++) {
            let word1 = words[i]
            let word2 = words[j]
            let concatenated = word1 + word2

            // Check if the concatenated word is a palindrome
            if (concatenated === concatenated.split('').reverse().join('')) {
                result.push([i, j])
            }
        }
    }

    return result
}

let words = ["code", "edoc", "da", "d"]
console.log(findPalindromePairs(words))
