const myPromise = () => {
    const promise = new Promise((resolve, reject) => {
        reject("rejected ");
    });

    return promise;
};

//console.log(myPromise());

myPromise()
    .then((data) => {
        console.log("Data: ", data);
    })
    .catch((err) => {
        console.log("Err: ", err);
    });

for (let i = 1; i < 1; i++) {
    console.log("i: ", i);
}