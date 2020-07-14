'use strict';

class Signup{
    constructor (){
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeatPassword");
        this.signupButton = document.querySelector("#signupButton");
        this.errorsWrapper=document.querySelector(".message-container");

    }

    // gerstionar cambios del input email
    handdleEmailInput = (event)=> {
        const email= event.target.value;

        console.log('email', email);
        // validar el texto del input email
    }
    
    
    
    //gestionar cambios del password
    handlePasswordInput = (event) => {
        const password= event.target.value;

        console.log('password', password);
        // validar el texto del input password
    }
    
    
    
    //gestionar cambios del repeat password
    handleRepeatPasswordInput = (event) => {
        const repeatPassword= event.target.value;

        console.log('email',repeatPassword);
        // validar el texto del input email
    }
    
    
    
    
    
    
    //gestionar envio de datos
     saveData = (event) => {
         //cuando el evento ocurre cancelar y no recargar la pagina
         event.preventDefault();
         //recoger los valores de cada input
       const  name = this.nameInput.value;
       const email = this.emailInput.value;
       const password = this.passwordInput.value;
       const repeatPassword = this.repeatPasswordInput.value;

       
       const newUser= new User(name, email, password);

       //guardar el usuario en la base de datos simulada
       db.saveNewUser(newUser);



       //vaciar el form
       this.nameInput.value = "";
       this.emailInput.value = "";
       this.passwordInput.value = "";
       this.repeatPasswordInput.value = "";



     }



     //registrar eventos

     addListeners = () => {

        //escucha los cambios de texto
         this.emailInput.addEventListener("input", this.handdleEmailInput);
         this.passwordInput.addEventListener("input", this.handlePasswordInput);
         this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);

         this.signupButton.addEventListener("click", this.saveData);

     }



}

// crear una nueva instancia del signup (objeto)
const signup = new Signup();

window.addEventListener("load", signup.addListeners);


