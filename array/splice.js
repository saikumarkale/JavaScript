/*let str = "hi im sai kumar kale learnin JS";


let arr = str.split(" ");

console.log(arr)

let word = arr.indexOf("kale");
console.log(word);
if (word !== -1) {
    arr.splice(word, 1)
}
//word = "***";
//arr.splice(word, 1);
let final = arr.join(" ");
console.log(final)


let arrr = [1, 2, 3, 4, 5, 10, 17, 8];


let res = arrr.slice(4, 6)

console.log(res)*/



/*const message = "My name is Ankit & i'm from Morena. I saw a dog";

  // split
  const splittedArr = message.split(" ");

  console.log(splittedArr);

  const wordIndex = splittedArr.indexOf("dog");

  console.log(wordIndex);

  if (wordIndex !== -1) {
    splittedArr.splice(wordIndex, 1);
  }

  console.log(splittedArr);

  const finalMessage = splittedArr.join(" ");

  console.log(finalMessage);*/


let text = "my name is sai kumar kale";


let splitText = text.split(" "); console.log(splitText);
let index = splitText.indexOf("sai"); console.log(index);

if (index !== -1) {
    splitText[index] = "***";
}


let finalOut = splitText.join(" "); console.log(finalOut);





