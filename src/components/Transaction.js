import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { selectReceiver } from '../features/receiverSlice';
import { selectSender } from '../features/senderSlice';
import { ontransaction } from '../features/transactionSlice';
import TransactionServices from '../services/TransactionServices';

function Transaction(props){
    const [type,setType]=useState('');
    const [msg,setMsg]=useState('');
    const [output,setOutput]=useState([]);
    const [tamount,setTamount]=useState(null);
    const [errmsg,setErrmsg]=useState('');

    const sender=useSelector(selectSender);

    const typeChangeHandler=(event)=>{
        let type=event.target.value;
        let name=sender.accholdername;
        if(type==="Customer Transfer" || ( type==="Bank Transfer" && (name==="HDFC BANK -(C1-A)" ||name==="HDFC BANK -(B1-A)" || name==="HDFC BANK -(H0-A)"))){
        setErrmsg(" ");
        setType(type);
        }
        else
        setErrmsg("Cannot Initiate Bank Transfer!!")
    }
    const msgChangeHandler=(event)=>{
        let msg=String(event.target.value);
        TransactionServices.findInstruction(msg).then((res)=>{
            setMsg(msg);
            setOutput(res.data)
        })
    }
    const amountChangeHandler=(event)=>{
        setTamount(event.target.value);
    }
    const dispatch=useDispatch();

    const next=(e)=>{
        e.preventDefault();
        if(type!=='none' && type!==''){
            if(msg!=='none'){
                if(tamount!==null){
                    dispatch(ontransaction({
                        transactiontype:type,
                        instruction:output.instruction,
                        amount:tamount
                    }))
                    props.history.push("/final");
                }
                else
                setErrmsg("Enter Amount");
            }
            else
            setErrmsg("Select Instruction");
        }
        else
        setErrmsg("Select Type");
    }
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Transaction Details</h3>
                            <h5 className="text-center text-danger">{errmsg}</h5>
                            <div className="card-body">
                                <form onSubmit={next}>
                                    <div className="form-group">
                                        <label>Transaction Type : </label>
                                        <select className="form-select" onChange={typeChangeHandler} required>
                                            <option value="none" defaultChecked="true">select</option>
                                            <option >Customer Transfer</option>
                                            <option >Bank Transfer</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Message Code : </label>
                                        <select className="form-select" onChange={msgChangeHandler} required>
                                            <option value="none" defaultChecked="true">select</option>    
                                            <option>CHQB</option>
                                            <option>CORT</option>
                                            <option>HOLD</option>
                                            <option>INTC</option>
                                            <option>PHOB</option>
                                            <option>PHOI</option>
                                            <option>PHON</option>
                                            <option>REPA</option>
                                            <option>SDVA</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Amount : </label>
                                        <input placeholder="Enter Amount" name="amount" className="form-control"
                                          onChange={amountChangeHandler} required/>
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

export default Transaction;