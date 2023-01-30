import { getDetails } from "../promise.js";

let userDetails = {};

(async () => {
    userDetails = await getDetails();

    /* getDetails().then((data)=>{
      greetUser();
    }) */
    greetUser();
})();

/* async function loadUserData() {
  userDetails = await getDetails();
  greetUser();
} */

//loadUserData();

function greetUser() {
    alert(`Hello Mr. ${userDetails.name} from ${userDetails.city}`);
}