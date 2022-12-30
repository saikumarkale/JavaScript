// How to add an element - .push()

// How to remove an element - .pop()

// How to check the length of the arr - .length

// How to empty an array = arr.length = 0

// Can we define multiple data types in an array - Yes

// How to acces a particular index value

let a = [];


a.push(2, 3, 5, 8, 9);

console.log(a);

a[10] = 3;

console.log(a, a.length);
console.log(a[7]);

a.push(3, 'Shubham', true, { name: "sai" }, null, undefined, 'ankit', 8, 9, 10)

console.log(a)
let len = a.length;

for (let i = 0; i < len; i++) {
    a.pop();
    console.log("for" + a);
}


a.pop();
console.log(a)

a.pop();
console.log(a)



console.log(a.length);

a.length = 0;
console.log(a)

a.push(1, 'sai', false, '!');


console.log(a)


console.log(a[2])



let box = [1, 2, 3, 4, 5, 6, 7, 8]


box.shift();
box.shift();



console.log(box)


///box.unshift(1, 2, 3, 4, 5, 7); console.log(box)
