import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    password: "",
    nameError: "",
    passError: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeName: (state, action) => {
            state.nameError = "";
            state.name = action.payload;
        },
        changePass: (state, action) => {
            state.passError = "";
            state.password = action.payload;
        },
        setNameError: (state, action) => {
            state.nameError = action.payload;
        },
        setPassError: (state, action) => {
        state.passError = action.payload;
        },
    }
})

export const validatePass = (password) => (dispatch) => {
    console.log("Validating password:", password);
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])[A-Za-z0-9@#$%^&+!=]{8,}$/;
    
    if (!password) {
        // Empty
        console.log("password is empty");
        dispatch(setPassError('Password required'));
    } else if (!passRegex.test(password)) {
        // Incomplete
        console.log("password is incomplete");
        dispatch(setPassError('Password must have 1 lowercase, capital letter, number, special character, and a length of 8 or more.'));
    } else {
        // Valid
        console.log("password is valid");
        dispatch(setPassError(''));
    }
};

export const validateName = (name) => (dispatch) => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])[A-Za-z0-9@#$%^&+!=]{8,}$/;
    
    if (!name) {
        // Empty
        dispatch(setNameError('Name required'));
    } else if (name.length < 3) {
        // Incomplete
        dispatch(setNameError('Name is too short'));
    } else {
        // Valid
        dispatch(setNameError(''));
    }
};


export const {changeName, changePass, setNameError, setPassError} = userSlice.actions;
export default userSlice.reducer;