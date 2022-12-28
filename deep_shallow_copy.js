let details = {
    name: 'sai',
    age: '23',
    address: {
        city: 'hyd',
        country: 'india',
    }
}



/*shallow copy:if we make changes in the nested obj ,
it will also reflect in the origional object.*/
const copyDetails = { ...details }


//deepcopy:it will not effect the origional object
const deepCopy = structuredClone(details);

//deepcopy:function inside obj
//it is the drawback for stringify ...function wont get copied
const a = {
    name: "Mitesh",
    city: "Mumbai",
    getName: function () {
        return this.name;
    },
    details: {
        address: "Kalyan",
    },
};
const d = JSON.parse(JSON.stringify(a))
console.log(d)

