const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const eyeIcon = document.querySelectorAll(".toggle-icon")

signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});

eyeIcon.forEach(function(toggle){
    toggle.addEventListener("click", function(){
        const passField = document.getElementById(toggle.getAttribute('data-target'))

        const type = passField.getAttribute("type") === "password" ? "text" : "password"
        passField.setAttribute("type", type)

        if (toggle.classList.contains("fa-eye")){
            toggle.classList.toggle("fa-eye")
            toggle.classList.toggle("fa-eye-slash")
        } else{
            toggle.classList.toggle("fa-eye-slash")
            toggle.classList.toggle("fa-eye")
        }
    })
})