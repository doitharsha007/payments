import { createSlice } from "@reduxjs/toolkit";

export const receiverSlice=createSlice({
    name:"receiver",
    initialState:{
        receiver:null
    },
    reducers:{
        onreceive:(state,action)=>{
            state.receiver=action.payload;
        }
    }
})

export const {onreceive}=receiverSlice.actions;

export const selectReceiver=(state)=>state.receiver.receiver;

export default receiverSlice.reducer;