const cart = ["cap", "shoes"];



createOrder(cart, function () {
    proceedToPayment(function () {
        summary(function () {
            walletBalance();
        });
    });
});


const prom = createOrder(cart);

const createOrder = () => {
    return new Promise((reply, reject) => {
        reply(true);
    });
};
const proceedToPayment = () => {
    return new Promise((reply, reject) => {
        reply(true);
    });
};
const summary = () => {
    return new Promise((reply, reject) => {
        reply(true);
    });
};

const walletBalance = () => {
    return new Promise((reply, reject) => {
        reply(true);
    });
};


async function visitRestro() {
    const createOrderresponse = await createOrder();
    console.log("Using Await", createOrderresponse);
}



