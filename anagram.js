/**
 * take the input string1 and divide into the chharacters array
 * take the another string and divide into the characters array
 * lenth of both the strings are equal proceed further else its not an anagram.
 * take the occurance of each character and compare with the other string eachg char occurance count
 *iterate the process
 *if the count is different then it is false other wise its a anagram.
 */



function angrm(str1, str2) {

    str1 = str1.toLowerCase().split('').sort().join('');
    str2 = str2.toLowerCase().split('').sort().join('');

    if (str1 === str2) {
        console.log("it is anagram");
    }
    else {
        console.log("Not an anagram");
    }
}
angrm("iii", "iiiI");







