import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectReceiver } from '../features/receiverSlice';
import { selectSender } from '../features/senderSlice';
import { selectTransaction } from '../features/transactionSlice';
import { onConfirm } from '../features/finalSlice';
import SenderServices from '../services/SenderServices';
import DashboardServices from '../services/DashboardServices';

function FinalComponent(props) {
    
    const sender=useSelector(selectSender);
    const receiver=useSelector(selectReceiver);
    const transaction=useSelector(selectTransaction);
    const total_transfer_fund=Number(transaction.amount)+(Number(transaction.amount)*0.0025)
    const balance=Number(sender.clearbalance);
    const [msg,setMsg]=useState(null)
    let updatedsender={
        id:sender.customerId,
        name:sender.accholdername,
        clearBalance:sender.clearbalance,
        overdraft:sender.overdraft
    }
    let dash={
        senderid:sender.customerId,
        sender:sender.accholdername,
        receiver:receiver.beneficiar,
        receiverinstitution:receiver.institution,
        amount:total_transfer_fund,
        status:null
    }
    const dispatch=useDispatch();
    const next=(e)=>{
        if(total_transfer_fund>balance){
            
            if(Boolean(sender.overdraft)){
                
                dispatch(onConfirm({
                    transaction:true
                }));
                setMsg(Boolean(true));
                updatedsender.clearBalance=balance-total_transfer_fund;
                SenderServices.updateSender(sender.customerId,updatedsender);
            }
            else{
                setMsg(Boolean(false));
                dispatch(onConfirm({
                    transaction:false
                }));
            }
        }
        else{
            setMsg(Boolean(true));
            dispatch(onConfirm({
                transaction:true
            }));
            updatedsender.clearBalance=balance-total_transfer_fund;
            SenderServices.updateSender(sender.customerId,updatedsender);
        }
        dash.status=msg;
        DashboardServices.addToDash(dash);
        props.history.push("/output");
    }
        return (
            <div>
                <h2 className="text-center">Confirmation</h2>
                <div className="row">
                    <table align="center" className="table table-striped table-bordered w-50 ">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="label">Customer Id</td>
                                <td>{sender.customerId}</td>
                            </tr>
                            <tr>
                                <td className="label">Account Holder Name </td>
                                <td>{sender.accholdername}</td>
                            </tr>
                            <tr>
                                <td className="label">Receiver </td>
                                <td>{receiver.beneficiar}</td>
                            </tr>
                            <tr>
                                <td className="label">Receiver Bank</td>
                                <td>{receiver.institution}</td>
                            </tr>
                            <tr>
                                <td className="label">Type </td>
                                <td>{transaction.transactiontype}</td>
                            </tr>
                            <tr>
                                <td className="label">Instruction </td>
                                <td>{transaction.instruction}</td>
                            </tr>
                            <tr>
                                <td className="label">Amount </td>
                                <td>{transaction.amount}</td>
                            </tr>
                            <tr>
                                <td className="label">Tax (0.25%) </td>
                                <td>{Number(transaction.amount)*0.0025}</td>
                            </tr>
                            <tr>
                                <td className="label">Total Transfer Amount</td>
                                <td>{total_transfer_fund}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                    <button className="btn btn-success" onClick={next}>Confirm</button>
                    </div>
                </div>
            </div>
        );
    
}

export default FinalComponent;