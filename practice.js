let details = {
    name: 'sai',
    age: '23',
    address: {
        city: 'hyd',
        country: 'india',
    }
}


const { name, age, address = { town: 'gch' } } = details;


console.log(town);