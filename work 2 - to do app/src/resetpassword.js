import React, { useState } from 'react';
import FormCSS from './Form.module.css'; 
import MyImage from './image/logo.png';
import {Link} from "react-router-dom";

function Resetpassword () {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const [submitButton, setSubmitButton] = useState(true); 
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPassValid, setisPassValid] = useState(false);
    const [showTooltipEmail, setShowTooltipEmail] = useState(true);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])[A-Za-z0-9@#$%^&+!=]{8,}$/;

    
    function onSetPassword(value) {
        setPassword(value);
        setisPassValid(passRegex.test(value));
        
    }

    function isNewPassValid(){}

    function isConfirmValid(){}

    function isFormValid(){
            return isEmailValid && isNewPassValid && isConfirmValid;
        }


    const handleReset = (event) => {
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
        <h2 className={FormCSS.form}>Resetear contraseña</h2>
        <form id="submit-form" className={FormCSS.centered}>
        <div className={FormCSS.inputContainer}>
            <label htmlFor="password">Contraseña:</label>
            <input
                className={`${FormCSS.inputValid} ${isPassValid ? '' : FormCSS.inputInvalid}`}
                placeholder="Contraseña"
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => onSetPassword(e.target.value)}
            />
            </div>
            <div className={FormCSS.warningContainer}>
            <p className={`${FormCSS.warning} ${!isPassValid ? '' : FormCSS.warningDisabled}`}>
                Contraseña invalida</p>
            </div>
            <div className={FormCSS.inputContainer}>
            <label htmlFor="password">Nueva cotraseña:</label>
            <input
                className={`${FormCSS.inputValid} ${isPassValid ? '' : FormCSS.inputInvalid}`}
                placeholder="Nueva contraseña"
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => onSetPassword(e.target.value)}
            />
            </div>
            <div className={FormCSS.inputContainer}>
            <label htmlFor="password">Confirmar:</label>
            <input
                className={`${FormCSS.inputValid} ${isPassValid ? '' : FormCSS.inputInvalid}`}
                placeholder="Nueva contraseña"
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => onSetPassword(e.target.value)}
            />
            </div>
            <div className={FormCSS.loginButtonContainer}>
            <input
                className={isFormValid() ? FormCSS.loginButton : FormCSS.loginButtonInvalid}
                type="submit"
                value="Enviar"
                disabled={!isFormValid()}
                onClick={handleReset}
            />
            </div>
        </form>
        </section>
    </>
    );
    }
    
    export default Resetpassword;
    