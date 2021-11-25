import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFinal } from '../features/finalSlice';
import { logout } from '../features/userSlice';

function Output(props) {
    const output=useSelector(selectFinal);
    const send=()=>{
        props.history.push('/sender');
    }
    const dispatch=useDispatch();
    const exit=()=>{
        dispatch(logout({
            loggedIn:false
        }));
        props.history.push('/');
    }
    return (
        <div className="out-div">
            {
             output.transaction?
             <p className="text-success">Transaction successfull</p>:
             <p className="text-danger">No sufficient balance</p>   
            }
            <button className="btn btn-success" onClick={send}>New</button>&nbsp;&nbsp;
            <button className="btn btn-danger" onClick={exit}>Logout</button>
        </div>
    );
}

export default Output;