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


