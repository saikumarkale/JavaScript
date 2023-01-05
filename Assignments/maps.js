const inputOne = [
    {
        name: "John",
        age: 13,
    },
    {
        name: "Mark",
        age: 56,
    },
    {
        name: "Rachel",
        age: 45,
    },
    {
        name: "Nate",
        age: 67,
    },
    {
        name: "Jeniffer",
        age: 65,
    },
];


let op = inputOne.filter(data => data.age > 60).map(data => data.age)
console.log(op)

// Output - [ 67, 65]; - Age > 60

const inputTwo = "Every developer likes to mix kubernetes and javascript";
// Output - "E3y d7r l3s to mix k8s and j8t";


let input = inputTwo.split(' ');

let output = input.map(input => input.length > 3).map(input[0] + (input.length - 2) + input[input.length - 1]);
console.log(output)



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

  // - Output 1 - ['Hello John', 'Hello Becky', 'Hello Susy', 'Hello Tyson']
  // - Output 2 - [4,5,4,5] -> username length
  // - Output 3 - [3,3,3,3] - team length
  // - Output 4 - ['Hello John from Red', 'Hello Becky from Blue', 'Hello Susy from Red', 'Hello Tyson from Green']
  // - Output 5 - [{ username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"]}]
  // - Output 6 - [71] - count of score