import React, { useState } from 'react';
import FormCSS from './Form.module.css'; 

function Form () {

    const [name, setName] = useState(''); // test
    const [lastName1, setLastName1] = useState(''); // Ap paterno
    const [lastName2, setLastName2] = useState(''); // Ap materno
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [nationality, setNationality] = useState('');
    const [address, setAddress] = useState('');
    const [cp, setCp] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');

    // Check sex
    const male = document.getElementById('male');
    const female = document.getElementById('female');

    const nameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s-]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // const phoneRegex = /(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;
    const phoneRegexSimple =  /^[0-9]+$/;
    // const nationalityRegex =  /^[a-zA-ZÀ-ÖØ-öø-ÿ\s-]+$/;
    const cpRegex = /^\d{5}$/;
    const ageRegex = /^[1-9]+[0-9]*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])[A-Za-z0-9@#$%^&+!=]{8,}$/;


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Submit btn clicked");
        // Field validation
        if (!nameRegex.test(name)) {
            alert('Nombre debe ser alfabético.');
            return;
        }
        if (!nameRegex.test(lastName1) || !nameRegex.test(lastName2)) {
            alert('Apellidos deben ser alfabéticos.');
            return;
        }
        if (!phoneRegexSimple.test(phone)) {
            alert('Teléfono debe ser numérico.');
            return;
        }
        if (!emailRegex.test(email)) {
            alert('Email no válido.');
            return;
        }
        if (!male.checked && !female.checked){  // Check sex
            alert('Sexo debe ser seleccionado');
            return;
        }
        if (!nameRegex.test(nationality)) {
            alert('Nacionalidad no válida.');
            return;
        }
        if (!nameRegex.test(address)) {
            alert('Dirección no válida.');
            return;
        }
        if (!cpRegex.test(cp)) {
            alert('CP no válido.');
            return;
        }
        if (!ageRegex.test(age)) {
            alert('Edad no válida.');
            return;
        }
        if (!passwordRegex.test(password)) {
            alert('Contraseña debe tener 1 minuscula, 1 mayuscula, 1 numero, 1 caracter especial y un total de 8 caracteres.');
            return;
        }

        // Else, proceed with form submission
        console.log("Form submitted");
    };

    const handleCancel = () => {
        console.log("Cancel btn clicked");
        // Reset field states
        setName('');
        setLastName1('');
        setLastName2('');
        setPhone('');
        setEmail('');
        setNationality('');
        setAddress('');
        setCp('');
        setAge('');
        setPassword('');
        // Reset radio bttns
        male.checked = false;
        female.checked = false;
    };


    return ( // Form component
        <>
        <section className={FormCSS.sectionForm}>
        <h2 className={FormCSS.form}>Formulario</h2>
        <form id="submit-form" className={FormCSS.centered}>
            <div className={FormCSS.inputContainer}>
            <label htmlFor="name">Nombre:</label>
            <input
                placeholder="Name"
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div className={FormCSS.inputContainer}>
            <label>Apellidos:</label>
            <input
                placeholder="Paterno"
                id="last-name-1"
                type="text"
                className={FormCSS.lastName1}
                value={lastName1}
                onChange={(e) => setLastName1(e.target.value)}
            />
            <input
                placeholder="Materno"
                id="last-name-2"
                type="text"
                value={lastName2}
                onChange={(e) => setLastName2(e.target.value)}
            />
            </div>
            <div className={FormCSS.inputContainer}>
            <label htmlFor="phone">Teléfono:</label>
            <input
                placeholder="Teléfono"
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            </div>
            <div className={FormCSS.inputContainer}>
            <label htmlFor="email">Email:</label>
            <input
                placeholder="Correo"
                id="email"
                type="email"
                autoComplete="current-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            </div>
            <label>Sexo:</label>
            <div className={FormCSS.sexContainer}>
            <input type="radio" id="male" name="sex" value="HTML" />
            <label htmlFor="male">Masculino</label>
            <input type="radio" id="female" name="sex" value="CSS" />
            <label htmlFor="female">Femenino</label>
            </div>
            <div className={FormCSS.inputContainer}>
            <label htmlFor="nationaliity">Nacionalidad:</label>
            <input
                placeholder="Nacionalidad"
                id="nationaliity"
                type="text"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
            />
            </div>
            <div className={FormCSS.inputContainer}>
            <label htmlFor="address">Dirección:</label>
            <input
                placeholder="Dirección"
                id="address"
                type="text"
                className={FormCSS.lastName1}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <input
                placeholder="CP"
                id="CP"
                type="number"
                value={cp}
                onChange={(e) => setCp(e.target.value)}
            />
            </div>
            <div className={FormCSS.inputContainer}>
            <label htmlFor="age">Edad:</label>
            <input
                placeholder="Edad"
                id="age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />
            </div>
            <div className={FormCSS.inputContainer}>
            <label htmlFor="password">Contraseña:</label>
            <input
                placeholder="Contraseña"
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div className={FormCSS.buttonContainer}>
            <input
                type="submit"
                value="REGISTRAR"
                className={FormCSS.myButton}
                onClick={handleSubmit}
            />
            <input
                type="reset"
                value="CANCELAR"
                className={FormCSS.myButton2}
                onClick={handleCancel}
            />
            </div>
        </form>
        </section>
    </>
    );
    }
    
    export default Form;
    