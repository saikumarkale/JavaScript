export const getDetails = () =>
    new Promise((reply, reject) => {
        reply({
            name: "Shivam",
            city: "Jabaplur",
            country: "India",
        });
    });