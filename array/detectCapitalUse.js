
var detectCapitalUse = function (word) {
    if (word === word.toUpperCase() || word === word.toLowerCase()) {
        return true
    }
    else if (word === word.charAt(0) + word.slice(1).toLowerCase()) {
        return true
    }
    else return false
}

console.log(detectCapitalUse("saI"))