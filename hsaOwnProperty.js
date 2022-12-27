const person = {
    name: "sai", company: 'tcs',
    tech: {
        tech1: 'java', tech2: 'html',
        java: {
            java1: 'javascript',
            java2: 'corejava'
        }

    }
}




const nameAvailable = person.hasOwnProperty("name");
const companyAvailable = person.hasOwnProperty("company");
console.log(nameAvailable, companyAvailable);



Object.freeze(person);
Object.seal(person);
person.name("ram");
console.log(person.name);



