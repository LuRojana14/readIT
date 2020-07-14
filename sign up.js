const { default: validator } = require("validator");

class Signup {
    constructor (){
    }

    handleEmailInput = (event) => {
        const email= event.target.value;

        validator.validateValidEmail(email);

        const errors = validator.getErrors();

        //si el nombre del mail es valido
        if(!errors.invalidEmailError){

            validator.validateUniqueEmail(email);
        }
    }
    //gestionar cambios del input "password"
    handlePasswordInput = (event) => {
        const passwordRepeat = event.target.value;

       const passwordRepeat =this.repeatPasswordInput.value;
       // validar texto del input password
        validator.validatePassword(password);
        validator.validatePasswordRepeat(password, passwordRepeat);
    }

    saveData= (event) =>{
    }


    addListeners =() => {
    }
    
    
    setErrorMessages = () => {
        //vacia lose rrores para que no se sumen

        this.errorsWrapper.innerHTML = "";

        const errorsObj = validator.getErrors();

        // convertir el objeto en un array de strings 
        const errorsStringsArr = Object.values(errorsObj)

        errorsStringsArr.forEach( (errorStr) => {
            const errorMessageP = document.createElement ('p');
          
            errorMessageP.innerHTML = errorStr;
            
            this.errorsWrapper.appendChild(errorMessageP);
       
        })

    
    }




}


