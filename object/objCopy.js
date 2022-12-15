
//with assign method....will be able to copy with out changing the previous obj value

const person = { name: "sai", job: "se" };

const details = Object.assign(person, { height: "5.10", age: "23" });

console.log(details);


const fulldetails = Object.assign(person, details, { weight: "70kg", name: "saikumar" });


console.log(fulldetails);



//with spread method
const prof1 = {
    name: "kale"
}
const prof2 = {
    middle: "sai", lastname: "kumar"
}

const fullname = { ...prof1, ...prof2 }

console.log(fullname);
