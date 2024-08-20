const username = document.getElementById('usernane');
const form = document.getElementById('form');
const errorMessage = document.getElementById('errorMessage');


form.addEventListener("submit", (e) => {
    const errors = [];

    if(username.ariaValueMax.trim() === "")
        errors.push("Username required")

    if(error.lenght > 0){
        e.preventDefault();
        errorMessage.toggleAttribute('hidden')
        errorMessage.innerHTML = errors.join(', ')
    }
}) 


