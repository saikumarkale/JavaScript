const person = { name: "sai", job: "se" };

const details = Object.assign(person, { height: "5.10", age: "23" });

console.log(details);


const fulldetails = Object.assign(person, details, { weight: "70kg", name: "saikumar" });


console.log(fulldetails);