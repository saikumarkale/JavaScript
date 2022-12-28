/*let person = {
    name: 'sai', age: 23, exp: 2
}

let details = {
    myName: 'kale', myAge: 26, exp: 4
}



const newObj = { ...person, ...details }


//console.log(newObj);



const newwwwobj = Object.assign(person, {})
console.log(newwwwobj)*/


const profile = {
    id: 1,
    name: "Ankit",
    city: "Morena",
    state: "MP",
};

const student = {
    studentId: 1,
    name: "Ankit Jain",
    city: "Morena",
    program: "CSE-2015",
    name: "Mr. Ankit Jain",
    name: "Mr. Ankit Jain(AJ)",
};

// Merge using assign
Object.assign({ country: "India", city: "MRA" }, student);
console.log(student);