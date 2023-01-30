import { DisplayInfo } from "./DisplayInfo.js";
//import { EditInfo } from './EditInfo.js'
//import { DeleteInfo } from './DeleteInfo.js'
import { SaveInfo } from "./SaveInfo.js";


const addUserbtn = document.getElementById("addUser");
const btnText = addUserbtn.innerText
const usernameTextField = document.getElementById("username");
//const recordsDisplay = document.getElementById("records");
let userArray = [];
let edit_id = null;
let objStr = localStorage.getItem("users");
if (objStr != null) {
    userArray = JSON.parse(objStr);
}
DisplayInfo();
addUserbtn.onclick = () => {
    const name = usernameTextField.value;
    if (edit_id != null) {
        userArray.splice(edit_id, 1, { 'name': name })
        edit_id = null;
    } else {
        userArray.push({ 'name': name });
    }
    SaveInfo(userArray);
    usernameTextField.value = '';
    addUserbtn.innerText = btnText;
};

// function SaveInfo(userArray) {
//     let str = JSON.stringify(userArray);
//     localStorage.setItem("users", str);
//     DisplayInfo();
// }
/*function DisplayInfo() {
    let statement = '';
    userArray.forEach((user, i) => {
        statement += `<tr>
    <th scope="row">${i + 1}</th>
    <td>${user.name}</td>
    <td><i class="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i})'></i>
      <i class="btn btn-danger text-white fa fa-trash" onclick='DeleteInfo(${i})'></i></td>
  </tr>`;
    });
    recordsDisplay.innerHTML = statement;
}*/
//import { DisplayInfo } from "./DisplayInfo.js";
/*function EditInfo(id) {
    edit_id = id;
    usernameTextField.value = userArray[id].name;
    addUserbtn.innerText = 'save changes'
}*/
// export function DeleteInfo(id) {
//     userArray.splice(id, 1,);
//     SaveInfo(userArray);

// }
//import { EditInfo } from './EditInfo.js'

//import { DeleteInfo } from './DeleteInfo.js'
//import { SaveInfo } from "./SaveInfo.js";