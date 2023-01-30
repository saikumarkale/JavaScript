import { getDetails } from "./promise.js";
console.log("Main.js started with top level await");
const r = await getDetails();
console.log(r);

console.log("Main.js started with top level await loaded");