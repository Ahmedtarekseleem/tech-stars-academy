const codeFields = document.querySelectorAll(".code-field");
const eyeIcon = document.querySelectorAll(".toggle-icon")

codeFields.forEach((field, index) => {
    field.maxLength = 1; // Set max length to 1

    field.addEventListener("keyup", () => {
        if (field.value.length === 1 && index < codeFields.length - 1) {
            codeFields[index + 1].focus(); // Move to the next field
        }
    });
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