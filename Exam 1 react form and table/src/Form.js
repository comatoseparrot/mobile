import React, { useState } from 'react';
import FormCSS from './Form.module.css';

function Form (params) {
	const [name, setName] = useState('');
	const [lastname1, setLastName1] = useState('');
	const [lastname2, setLastName2] = useState('');
	const [phone, setPhone] = useState('');
	const [isNameValid, setisNameValid] = useState(false);
	const [isLastName1Valid, setisLastName1Valid] = useState(false);
	const [isLastName2Valid, setisLastName2Valid] = useState(false);
	const [isPhoneValid, setisPhoneValid] = useState(false);
	//const [isFormValid, setisFormValid] = useState(false);

	// Regex list
	const RegexName = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s-]+$/;
	//const RegexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	const RegexPhone = /^[1-9]+[0-9]*$/;

	 // Functions
	function onSetName(value) {
        setName(value);
        setisNameValid(RegexName.test(value) && value.length > 0);
        
    }

	function onSetLastName1(value) {
        setLastName1(value);
        setisLastName1Valid(RegexName.test(value) && value.length > 0);
        
    }

	function onSetLastName2(value) {
        setLastName2(value);
        setisLastName2Valid(RegexName.test(value) && value.length > 0);
        
    }

	function onSetPhone(value) {
        setPhone(value);
        setisPhoneValid(RegexPhone.test(value) && value.length > 0);
        
    }

	function isFormValid(){
		return isNameValid && isLastName1Valid && isLastName2Valid && isPhoneValid;
	}

	


	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("btn clicked");
		if (isFormValid()){
			console.log("form valid");
			const formData = {
				name,
				lastname1,
				lastname2,
				phone,
			};

			params.onFormSubmit(formData);

				// Reset 
				setName('');
				setLastName1('');
				setLastName2('');
				setPhone('');
		} else {
			alert('Form invalid: Introduzca datos validos.');
		}
	}


    return (
    <>
	<form className={FormCSS.form}>
		<div className={FormCSS.Containerinput}>
		<label htmlFor="name">Nombre:</label>
		<input 
		placeholder="Nombre"
		id="name"
		type="text"
		value={name}
        onChange={(e) => onSetName(e.target.value)}
		/>
		</div>

		<div className={FormCSS.Containerinput}>
		<label htmlFor="latname1">Apellido Paterno:</label>
		<input 
		placeholder="Apellido Paterno"
		id="lastname1"
		type="text"
		value={lastname1}
        onChange={(e) => onSetLastName1(e.target.value)}
		/>
		</div>

		<div className={FormCSS.Containerinput}>
		<label htmlFor="lastname2">Apellido Materno:</label>
		<input 
		placeholder="Apellido Materno"
		id="lastname2"
		type="text"
		value={lastname2}
        onChange={(e) => onSetLastName2(e.target.value)}
		/>
		</div>

		<div className={FormCSS.Containerinput}>
		<label htmlFor="phone">Telefono:</label>
		<input 
		placeholder="Número"
		id="phone"
		type="tel"
		value={phone}
        onChange={(e) => onSetPhone(e.target.value)}
		/>
		</div>

		<div className={FormCSS.Containerbutton}>
		<input
		className={FormCSS.savebtn}
		type="button"
		value="Enviar"
		onClick={handleSubmit}
		></input>
		</div>


		</form>
    </>
    )
}

export default Form;