import * as dotenv from "dotenv";
dotenv.config();
const signUpButton = document.querySelector("#signUpButton");

signUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = "/pages/login.html";
});
