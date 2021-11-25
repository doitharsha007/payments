import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/userSlice';
import senderReducer from '../features/senderSlice';
import receiverReducer from '../features/receiverSlice';
import transactionReducer from '../features/transactionSlice';
import finalReducer from '../features/finalSlice'

export default configureStore({
    reducer:{
        user:userReducer,
        sender:senderReducer,
        receiver:receiverReducer,
        transaction:transactionReducer,
        output:finalReducer
    }
})