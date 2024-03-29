
const formElement = document.querySelector(".login-form");

formElement.addEventListener("submit", event => {
    event.preventDefault();
    const element = event.target.elements;
    const emailNormalize = element.email.value.trim();
    const passwordNormalize = element.password.value.trim();
    if (emailNormalize === "" || passwordNormalize === "") {
        alert("All form fields must be filled in");
    } else {
        const object = {
            email: emailNormalize,
            password: passwordNormalize,
        };
        console.log(object);
        event.target.reset();
    }
});


