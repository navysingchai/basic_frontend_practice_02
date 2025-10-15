const formLabel = document.querySelector("form p");
const btnSubmit = document.querySelector("form #submit");

const setFormLabel = (element, textContent, styleColor) => {
    element.textContent = textContent;
    element.style.color = styleColor;
}

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const formInput = document.querySelectorAll("form input");
    const passwordInput = document.querySelectorAll("form input[type=password]")
    for(input of formInput) {
        if(input.value.trim().length === 0) return setFormLabel(formLabel, "missing some value, please try again!", "red")
    }
    if(passwordInput[0].value !== passwordInput[1].value) return setFormLabel(formLabel, "password and configm do not match, check again", "red");

    setFormLabel(formLabel, "your data completed", "green")
});