let userArray = [];
const recordsDisplay = document.getElementById("records");
export function DisplayInfo() {

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
}
import { EditInfo } from './EditInfo.js';
import { DeleteInfo } from './DeleteInfo.js'
