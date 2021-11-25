import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice=createSlice({
    name:"transaction",
    initialState:{
        transaction:null
    },
    reducers:{
        ontransaction:(state,action)=>{
            state.transaction=action.payload;
        }
    }
})

export const {ontransaction}=transactionSlice.actions;

export const selectTransaction=(state)=>state.transaction.transaction;

export default transactionSlice.reducer;