'use strict';



class Validator {
 constructor() {
  //mensajes  predeterminados
    this.invalidEmailError= 'introduce un email valido';
    this.emailExistsError='Este email ya existe';
    this.passwordError='Introduce una contraseña de 6 o mas';
    this.repeatPasswordError='los campos no coinciden';

  //objeto con los errores que vamos a mostrar al usuario
    this.errors= {

        invalidEmailError: this.invalidEmailError,
        passwordError: this.passwordError,
        repeatPasswordError: this.repeatPasswordError,
    }


 }  //validar el nombre del email

    validateValidEmail=(email) =>{
        //REGEX OBJETO especial que contiene las reglas de la sintaxis
        const emailRegEx= //aqui viene el codigo regex
        //metodo test prueba si la cadena cumple las reglas (devuelve t o f)
        const is Valid = emailRegEx.test(email)

        
        // si el email es valido y si es valido quitar el error

        if (isValid){
            delete this.errors.invalidEmailError;
        } else {
        // si el email no es valido, poner mensaje de error
        if (this.errors.invalidEmailError=this.invalidEmailError;)



    }

    emailIsValid= (email) =>{

        
    }
    
    // validar el mail que no esta tomado
    validateUniqueEmail = (newEmail) =>{
        const usersDB = db.getAllUsers();

        if(usersDB.length > 0) {
            usersDB.forEach( (userObj) =>{
                if(userObj.email === newEmail){
                    emailUnique = false;
                }
            })


            if (email.Unique){ 

            }


   

    // validad la longitud del password
    validatePassword= (password) =>{
        if(password.length> 8){
            delete this.errors.passwordError;
        }
        else {
            // si el password tiene menos de 8 poner mensaje
            this.errors.passwordError= this.passwordError;

    }
 }

    //validar si el password y el repeat pass coinciden

    validatePasswordrepeat = (password, passwordRepeat)=>{

        if (password === passwordRepeat){
            
            delete this.errors.repeatPasswordError;
    }
    else {

        this.errors.repeatPasswordError = this.repeatPasswordError,
    }
  }


    // obtener el objeto con errores para msotrarlo en la pagina sign up
    getErrors = ()=>{
        return this.errors;

    }
   
    //reiniciar los errores mostrados

    resetValidator = () =>{}



}

