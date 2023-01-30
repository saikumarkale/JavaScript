export function DeleteInfo(id) {
    userArray.splice(id, 1,);
    SaveInfo(userArray);

}
import { SaveInfo } from "./SaveInfo";