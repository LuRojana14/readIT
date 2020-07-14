'use strict';



class Validator {
    constructor() {
        // mensajes predeterminados
        this.invalidEmailError= 'Introduce a valid email'
        this.emailExistsError= 'This email has already exists'
        this.passwordError= 'Introduce a password with 6 or more characters';
        this.repeatPasswordError= 'The fields dont match'

        //objeto con los errores q vera el usuario
        this.errors = {
            invalidEmailError: this.invalidEmailError,
            passwordError: this.passwordError,
            invalidEmailError: this.invalidEmailError,
        }
    }

        //validar nombre del email

        validAteValidEmail =(email) => {
          // si el email es valido quitar el error
         if (this.emailIsValid(email){
             delete this.errors.invalidEmailError;
         }  //si no poner el mensaje de error
         else {
             this.errors.invalidEmailError= this.invalidEmailError;
         }

        }



         //funcion auxiliar de validateemail, si cumple formato de mail
        // devuelve t o f
        emailIsValid =(email) => {
            const emailRegex = /^\W+([\.-]?\W+)*@\w+([\.-]?\W+)*(\.\W{2,4})+$/;
            // metodo test prueba si la cadena cumple 
          const isValid= emailRegex.test(email);
         
          return isValid
         
        }


        //validar si el mail es unico
        validateUniqueEmail = (newEmail) => {
         const usersDB = db.getAllUsers();

         let emailUnique = true;

         if (usersDB.length >0) {
             if (usersDB){
                 usersDB.forEach((userObj) => {
                     //si el email ya esta tomado cambia el valor de la variable a false
                     if (userObj.email ===newEmail) {
                         emailUnique = false;
                    }
                 })
             
           if (emailUnique) {
               //quitar el error
               delete this.errors.emailExistsError;
           } else {// si no es unico poner el mensaje de nuevo
             
             this.errors.emailExistsError = this.emailExistsError
           }
         }
        }


        //validar que la constraseña cumpla
        validatePassword = (password) => {
            if (password.length>8){
                delete this.errors.passwordError;
            } 
            else {
                this.errors.passwordError = this.passwordError;
            }

        }




        //validar si las contraseñas coinciden

        validatePasswordRepeat =(password, passwordRepeat) => {
            if (password=== passwordRepeat) {
                delete this.errors.repeatPasswordError;

            }
            else {
                this.errors.repeatPasswordError = this.repeatPasswordError;
            }
        }



        // obtener el objeto con errores, para mostrar al usuario en la pagina signup
        getErrors = () => {
            return this.errors;
        } 

       
       //reiniciar los errores
        resetValidator = () => {
            this.errors = {
              invalidEmailError: this.invalidEmailError,
              passwordError: this.passwordError,
              invalidEmailError: this.invalidEmailError,
        

            }
        }
        

 
}

const validator = new Validator ();