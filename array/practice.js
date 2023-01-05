//To find a first pair from a number array whose sum is K.




/*let op=[]
for(let i=0;i<input.length;i++){
    for(let j=1;i<input.length;i++){
        if(input[i]+input[j]==8){
      op.push(input[i],input[j]);
       break;
        }
        break;
    }
}

console.log(op)*/



/*let input =[1,2,7,4,6,2];
let newInput=Object.assign({},input)
let k=8

for(let i=0;i<input.length;i++){
if(input[i]+Object.values(newInput).includes(k-input[i])==k)
console.log(k-input[i],input[i]);
}
else console.log*/

/*const numbers = [1, 2, 3, 4, 5, 6, 7];

  const sum = numbers.reduce((prevVal, current) => {
    console.log({ prevVal, current });
    return prevVal + current;
  }, 0);

  const findNumAndMultipleByTwo = numbers.reduce((prevVal, current) => {
    if (current % 2 === 0) {
      prevVal.push(current * 2);
    }
    return prevVal;
  }, []);

  console.log({ sum }, findNumAndMultipleByTwo);

*/
const inputThree = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"],
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"],
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"],
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"],
    },
];

//const numbers = [1, 2, 3, 4, 5, 6, 7];

const sum = inputThree.reduce((prevVal, current) => {

    return prevVal + current.score;
}, 0);

console.log(sum)


const myscore = inputThree.reduce((prev, current) => {
    return prev = { myScore: current.score }
}, [])


const total = inputThree.reduce((pre, cur, ind) => {
    let tvalue = pre + cur.score
    let avg = tvalue / ind


    return tvalue, avg
}, { tvalue: 0, avg: 0 })


console.log(total)




