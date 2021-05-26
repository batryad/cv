const form = document.getElementById("form");
const email = document.getElementById("emailInput");
const envoyer = document.getElementById("envoyer");
const emailErr = document.getElementById("emailErr");

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w]{2,4}$/;


form.addEventListener('submit', (e) => {

    if (!emailRegex.test(email.value)) {
        emailErr.innerHTML = "Veuillez saisir une adresse e-mail valide";
        email.classList.add("border-danger");
        e.preventDefault()
    };

    if (emailRegex.test(email.value)) {
        emailErr.innerHTML = "";
        email.classList.remove("border-danger");
        email.classList.add("border-success");
    };
})