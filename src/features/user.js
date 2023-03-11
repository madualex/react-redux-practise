import { createSlice } from "@reduxjs/toolkit"


const initialStateValue = { name: "", age: 0, email: "" }

export const userSlice = createSlice({
    name: "user", // name of the state
    initialState: {
        value: initialStateValue
    }, //initial state of the comp
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        }, // remember to state the name of the action that would be performed on the state. In this case, it's called login and what it does is to set the state value to a new one.
        logout: (state) => {
            state.value = initialStateValue
        }

    } // A reducer in summary contains all the actual actions you are going to perform on the states to update/change them
});

export const { login, logout } = userSlice.actions; // export the actions that will be performed on the state to change them so that they can be accessed by the components needing them.

export default userSlice.reducer; // exporting the reducer itself specifically for the top most component index.js

// createSlice enables you to create a reducer in a very easy way. In a way, the createSlice can be called the reducer itself since it is what will be exported as default to the topmost indexjs component.