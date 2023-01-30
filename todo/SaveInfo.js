export function SaveInfo(userArray) {
    let str = JSON.stringify(userArray);
    localStorage.setItem("users", str);
    DisplayInfo();
}
import { DisplayInfo } from "./DisplayInfo.js";
