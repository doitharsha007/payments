import React, {useState } from 'react';
import { useDispatch } from 'react-redux';
import { onsend } from '../features/senderSlice';

import SenderServices from '../services/SenderServices';


function Sender(props){
    const [customerid,setCustomerid]=useState('');
    const [sender,setSender]=useState([]);
    const [errmsg,setErrmsg]=useState('');


    const customerIdChangeHandler=(event)=>{
        let id=String(event.target.value)
        if(id.length>=14){
            setCustomerid(id);
            SenderServices.findSender(id).then((res)=>{
                setSender(res.data);
            })
        }
    }

    const dispatch=useDispatch();

    const next=(e)=>{
        if(errmsg===''){
        e.preventDefault();
        if(customerid.length<14)
        setErrmsg("Invalid Customer Id")
        else if(sender.length===0)
        setErrmsg("User Not Found")
        else{
            dispatch(onsend({
                customerId:customerid,
                accholdername:sender.name,
                clearbalance:sender.clearBalance,
                overdraft:sender.overdraft
            }));
        props.history.push("/receiver");
        }
    }
    }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Sender</h3>
                            <h5 className="text-center text-danger">{errmsg}</h5>
                            <div className="card-body">
                                <form onSubmit={next}>
                                    <div className="form-group">
                                        <label>Customer Id : </label>
                                        <input placeholder="Enter cutomer ID" name="customerid" className="form-control" 
                                           onChange={customerIdChangeHandler} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Account Holder Name : </label>
                                        <span className="form-control">{sender.name}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Clear Balance : </label>
                                        <span className="form-control ">{sender.clearBalance} </span>
                                    </div>
                                    <button className="btn btn-success" type="submit">next</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default Sender;