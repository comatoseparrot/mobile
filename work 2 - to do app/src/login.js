import React, { useState } from 'react';
import FormCSS from './Form.module.css'; 
import MyImage from './image/logo.png';
import { Link } from 'react-router-dom';

function Login () {

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

    function onSetPassword(value) {
        setPassword(value);
        setisPassValid(passRegex.test(value));
        
    }

    function isFormValid(){
            return isEmailValid && isPassValid;
        }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Submit btn clicked");
        // Field validation
    
        if (!isEmailValid) {
            alert('Email no válido.');
            return;
        }
        if (!passRegex.test(password)) {
            alert('Contraseña debe tener 1 minuscula, 1 mayuscula, 1 numero, 1 caracter especial y un total de 8 caracteres.');
            return;
        }

        // Else, proceed with form submission
        console.log("Form submitted");
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
        <h2 className={FormCSS.form}>Accede a tu cuenta</h2>
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
            <div className={FormCSS.loginButtonContainer}>
            <input
                className={isFormValid() ? FormCSS.loginButton : FormCSS.loginButtonInvalid}
                type="submit"
                value="Iniciar sesión"
                disabled={!isFormValid()}
                onClick={handleSubmit}
            />
            </div>
            <div className={FormCSS.linkContainer}>
                <Link to="/forgotpassword">Olvidé mi contraseña</Link>
            </div>
        </form>
        </section>
    </>
    );
    }
    
    export default Login;
    