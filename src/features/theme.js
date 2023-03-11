import { createSlice } from "@reduxjs/toolkit";


const initialStateValue = "";

export const themeSlice = createSlice({
    name: "theme",
    initialState: { value: initialStateValue },
    reducers: {
        colorChange: (state, action) => {
            state.value = action.payload
        }
    }

})

export const { colorChange } = themeSlice.actions;

export default themeSlice.reducer;

// This reducer is a bit unique because the state wasn't created here but was created in a local component but must be made to work in sync with the initially created state for it to be accessed by all other component that wishes to access it.

// I also noticed that the initial state can even be set in the global redux state irrespective of the initial state set in the local state of the component where the state where initially created.