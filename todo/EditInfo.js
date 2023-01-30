export function EditInfo(id) {
    edit_id = id;
    usernameTextField.value = userArray[id].name;
    addUserbtn.innerText = 'save changes'
}