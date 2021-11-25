import { createSlice } from "@reduxjs/toolkit";

export const senderSlice=createSlice({
    name:"sender",
    initialState:{
        sender:null
    },
    reducers:{
        onsend:(state,action)=>{
            state.sender=action.payload;
        }
    }
})

export const {onsend}=senderSlice.actions;

export const selectSender=(state)=>state.sender.sender;

export default senderSlice.reducer;