function palindrome(str) {
    for (let i = 0; i < str.length / 2; i++) {
    if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
     return false;
    }
  }
  return true;
  }
function findLargestPalindromeWord(str) {
  let largestPalindrome = "";
  const words = str.split(" ");
      for(let i=0;i<words.length;i++){
    if (palindrome(words[i]) && (words[i].length > largestPalindrome.length)) {
      largestPalindrome = words[i];
    }
  };

  return largestPalindrome;
}
// function isPalindrome(str) {
//     let rev=str.split('').reverse().join('');
//   if(str==rev){
//     return true;
//   }else{
//       return false
//   }
// }

const str = "hi madam, you are my favourite   mmadamm mam";
console.log(findLargestPalindromeWord(str)); 
