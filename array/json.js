const profiles = [
    {
        name: "ankit",
        active: true,
    },
    {
        name: "ankit",
        active: true,
    },
    {
        name: "rahul",
        active: false,
    },
    {
        name: "shivam",
        active: true,
    },
    {
        name: "mitesh",
        active: false,
    },
];
/*const filterProfiles = [
    {
        name: "ankit",
        active: true,
    },
    {
        name: "ankit",
        active: true,
    },
    {
        name: "shivam",
        active: true,
    },
];*/

const filterProfiles = profiles.filter((data) => {
    return data.active
});
console.log(filterProfiles);