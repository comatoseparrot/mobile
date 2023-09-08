import React, { useState } from 'react';
import FormCSS from './Form.module.css'; 
import MyImage from './image/logo.png';
import {Link} from "react-router-dom";

function Forgotpassword () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [submitButton, setSubmitButton] = useState(true); 
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPassValid, setisPassValid] = useState(false);
    const [showTooltipEmail, setShowTooltipEmail] = useState(true);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])[A-Za-z0-9@#$%^&+!=]{8,}$/;

    
    function onSetEmail(value) {
        setEmail(value);
        setIsEmailValid(emailRegex.test(value));
        
    }

   

    function isFormValid(){
            return isEmailValid;
        }


    const handleForgot = (event) => {
        event.preventDefault()
        console.log("Enviar btn clicked");
        // Field validation
    
        if (!isEmailValid) {
            alert('Email no válido.');
            return;
        }
        
        // Else, proceed with form submission
        console.log("Enviar submitted");
    };

    return ( // Form component
        <>
        
        <div className={FormCSS.logoContainer}>
        <img src={MyImage} alt="logo"width="250" height="265" />
        </div>  
        {/*<center> email test
        <p> Hola {email} </p>
        </center> */}
        <section className={FormCSS.sectionForm}>
        <h2 className={FormCSS.form}>Obtener contraseña</h2>
        <form id="submit-form" className={FormCSS.centered}>
            <div className={FormCSS.inputContainer}>
            <label htmlFor="email">Corrreo:</label>
            <input
                className={`${FormCSS.inputValid} ${isEmailValid ? '' : FormCSS.inputInvalid}`}
                placeholder="Correo"
                id="email"
                type="email"
                autoComplete="current-email"
                value={email}
                onChange={(e) => onSetEmail(e.target.value)}
            />
            </div> 
            <div>
            <p className={`${FormCSS.warning} ${!isEmailValid ? '' : FormCSS.warningDisabled}`}>
                Correo invalido</p>
            </div>
            <div className={FormCSS.loginButtonContainer}>
            <input
                className={isFormValid() ? FormCSS.loginButton : FormCSS.loginButtonInvalid}
                type="submit"
                value="Enviar"
                disabled={!isFormValid()}
                onClick={handleForgot}
            />
            </div>
        </form>
        </section>
    </>
    );
    }
    
    export default Forgotpassword;
    