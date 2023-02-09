const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");

function changecolor() {
    if (password.value == confirmpassword.value && password.value != "") {
        password.classList.remove("error");
        confirmpassword.classList.remove("error");
        console.log("match detected");
    } else {
        password.classList.add("error");
        confirmpassword.classList.add("error");
    }
}

password.addEventListener('change', changecolor());
confirmpassword.addEventListener('change', changecolor());

document.addEventListener('keyup', changecolor)