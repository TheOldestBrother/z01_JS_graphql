import { submitForm } from "./session.js"


function renderAuth() {
    // let auth = document.createElement('div')
    // auth.innerHTML = `INSERT HTML HERE`
    
    console.log("Submit func set");
    // console.log(document.getElementById('loginForm').on)
    document.getElementById('loginForm').onsubmit = submitForm
}

export { renderAuth }