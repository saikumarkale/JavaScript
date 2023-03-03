const prom = fetch("url");
const prom2 = fetch("url");
const prom3 = fetch("url");

Promise.all([prom, prom3, prom2]).then((responses) => {
    for (const response of responses)
        console.log(`${response.url}: ${response.status}`)
})
    .catch((error) => {
        consolele.error("failed to fetch", `${error}`)
    })