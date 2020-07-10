



submit = (event) => {
    event.preventDefault();

    const usersDB=db.getAllUsers ();

    const email= this.emailInput.value;
    const password= this.passwordInput.value;

//intentar encontrar el usuario
    
    const user= usersDB.find((userObj)=> {
        if (userObj.email === email && userObj.password === password) {
            return true;
        }
    })


    this.showMessage(user);
}

//mostrar el mensaje de error o mensaje de exito

showMessage = (user) => {

    const message = document.createElement('p');

    if (user) {
        message.innerHTML = `hola, ${user.email}`;
        message.classList.add("correct-message");
    } 
    esle {
        message.innerHTML= 'el email o/y password son incorrectos';
    }

    this.messageContainer.appendChild(message);
}

