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
        // validar el texto del input email
        validator.validateValidEmail(email);

        const errors = validator.getErrors();
        if (!errors.invalidEmailError){
            validator.validateUniqueEmail(email);

        }
        // mostrar los errores si los hay
        this.setErrorMessages();

        this.checkButton();


    }
    
    
    
    //gestionar cambios del password
    handlePasswordInput = (event) => {
        const password= event.target.value;
        const passwordRepeat= this.repeatPasswordInput.value;

       
        // validar el texto del input password
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);
        // mostrar los errores si los hay
        this.setErrorMessages();

        this.checkButton();

    }

    
    
    
    //gestionar cambios del repeat password
    handleRepeatPasswordInput = (event) => {
        const passwordRepeat= event.target.value;
        const password= this.passwordInput.value; 


     
        // validar el texto del input email
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);
         // mostrar los errores si los hay
         this.setErrorMessages();
         this.checkButton();

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

       this.showSuccessMessage();
       this.removeMessages();

       validator.resetValidator();
       this.buttonInput.disabled = true;



     }



     //registrar eventos

     addListeners = () => {

        //escucha los cambios de texto
         this.emailInput.addEventListener("input", this.handdleEmailInput);
         this.passwordInput.addEventListener("input", this.handlePasswordInput);
         this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);

         this.signupButton.addEventListener("click", this.saveData);

     }


     showSuccessMessage = () => {
        // vacia los errores para que no se sumen
        this.errorsWrapper.innerHTML = "";
    
        const errorsObj = validator.getErrors();
        // convertir el objeto a un array de strings
        const errorsStringsArr = Object.values(errorsObj);
    
        if (errorsStringsArr.length > 1) {
          return;
        }
    
        const successMessageP = document.createElement('p');
        successMessageP.innerHTML = "La cuenta ha sido creada con exito";
    
        this.errorsWrapper.appendChild(successMessageP);
    
      }
    
      
      // activar o desactivar el botón de envio (Sign Up)
      checkButton = () => {
        const errorsObj = validator.getErrors();
        const errorsArr = Object.values(errorsObj);
        
    
        if(errorsArr.length > 0) {
          this.buttonInput.disabled = true;
        }
        else {
          this.buttonInput.disabled = false;
        }
      }
    
      removeMessages = () => {
        setTimeout( () => {
          this.errorsWrapper.innerHTML = "";
        }, 2000)
      }


    





     setErrorMessages = () => {
         //vacia los errores para que no se sumen
         this.errorsWrapper.innerHTML="";

         const errorsObj= validator.getErrors();

         //convertir el objeto a un array
         const errorsStringsArr= Object.values(errorsObj);
         

         errorsStringsArr.forEach( (errorStr)=> {
           const errorMessageP =  document.createElement('p')
           errorMessageP.innerHTML=errorStr;

           this.errorsWrapper.appendChild(errorMessageP);


         })


     }



}

// crear una nueva instancia del signup (objeto)
const signup = new Signup();

window.addEventListener("load", signup.addListeners);


