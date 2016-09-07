//A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers. Examples in English include "A man, a plan, a canal, Panama!", "Amor, Roma", "race car", "stack cats", "step on no pets", "taco cat", "put it up", "Was it a car or a cat I saw?" and "No 'x' in Nixon".

function palindromeFinder(palindrome) {
    var palindrome = palindrome.split(" ").join("").toLowerCase().split("")
    var reverse = palindrome.reverse()
    for (var i = 0; i < palindrome.length; i++) {
        return palindrome === reverse

    }
}

console.log(palindromeFinder("race car"))

// var palindrome = "race car on"
//  palindrome = palindrome.split(" ").join("").toLowerCase().split("")
//   var reverse = palindrome.reverse()
// console.log(palindrome)
// console.log(reverse)
