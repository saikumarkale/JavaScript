const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496",
        },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
    },
};


// "My name is Bret & you can send me an email on Sincere@april.biz.
// You can also call me on 1-770-736-8031 x56442.
// I'm working in Romaguera-Crona in bs. My GPS location is -37.3159, 81.1496.
// Also i live in Kulas Light (Gwenborough) having Pincode 92998-3874"



//My name is Bret & you can send me an email on Sincere@april.biz
//You can also call me on 1-770-736-8031 x56442
//I'm working in Romaguera-Crona in harness real-time e-markets. My GPS location is -37.3159 81.1496
//Also i live in Kulas Light (Gwenborough) having Pincode92998-3874


const { username, email, address, phone, website, company } = user;
const { street, suite, city, zipcode, geo } = address;
const { lat, lng } = geo;
const { name: companyName, catchPhrase, bs } = company;


console.log("My name is " + username + " & you can send me an email on " + email);
console.log("You can also call me on " + phone);
console.log("I'm working in " + companyName + " in " + bs + ". My GPS location is " + lat, lng);
console.log("Also i live in " + street + " (" + city + ")" + " having Pincode" + zipcode);


