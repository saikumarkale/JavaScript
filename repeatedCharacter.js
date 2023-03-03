let str = "aaabbbbcccccdddddddddd";


let spStr = str.split();


function rep() {
    let count = null;
    for (let i = 0; i < spStr.length; i++) {
        for (let j = i + 1; j < spStr.length; j++) {
            if (spStr[i] == spStr[j]) {

                count++;
            }
        }
    }
}


let str = "aaabbbbcccccdddddddddd";
let charCount = {};

// count the frequency of each character
for (let i = 0; i < str.length; i++) {
  if (charCount[str[i]]) {
    charCount[str[i]]++;
  } else {
    charCount[str[i]] = 1;
  }
}

// find the character with the maximum frequency
let maxChar = "";
let maxCount = 0;
for (let char in charCount) {
  if (charCount[char] > maxCount) {
    maxChar = char;
    maxCount = charCount[char];
  }
}

console.log("Most repeated character: " + maxChar);
console.log("Count: " + maxCount);
