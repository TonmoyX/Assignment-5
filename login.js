
 document.getElementById("signBtn")
.addEventListener('click', () => {
    const inputName = document.getElementById("inputName");
const name = inputName.value;
const inputPass = document.getElementById("inputPass");
const pass = inputPass.value;

    if(name == 'admin' && pass == 'admin123'){
        window.location.assign("home.html");

    }
    else{
        alert("Recorrect user name or password");
        return;
    }
})