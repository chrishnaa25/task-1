import { createSlice } from "@reduxjs/toolkit";

export interface inputState {
    Owner : {
     name?: string;
     phone?: string;
     expertise?: string;
     experience?: string;   
    },

    Bank: {
     accnum?: string;
     ifsc?: string;
     accholdername?: string;
     bank?: string;
     pan?: string;
     gst?: string;
    }   
}

const initialState : inputState ={
   Owner: { 
    name: "",
    phone: "",
    expertise: "",
    experience: ""
    },

    Bank: {
    accnum:"",
    ifsc: "",
    accholdername: "",
    bank: "",
    pan: "",
    gst: ""
    }
}

const inputSlice = createSlice({
    name: "input",
    initialState,
    reducers: {
        showDetailsBank: (state,action) => {
            state.Bank = action.payload
        },
        showDetailsOwner: (state,action) => {
            state.Owner = action.payload
        },
        clearDetailsOwner: (state) => {
            state.Owner = initialState.Owner
        },
        clearDetailsBank : (state) => {
            state.Bank = initialState.Bank
        }
    }
})

export const {showDetailsBank, showDetailsOwner ,clearDetailsOwner, clearDetailsBank} = inputSlice.actions

export default inputSlice.reducer