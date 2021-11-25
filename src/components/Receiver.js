import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { onreceive } from '../features/receiverSlice';
//import { selectSender } from '../features/senderSlice';
import ReceiverServices from '../services/ReceiverServices';

function Receiver(props) {
    const [bic,setBic]=useState('');
    const [receiver,setReceiver]=useState([]);
    const [name,setName]=useState('');
    const [errmsg,setErrmsg]=useState('');
    const bicChangeHandler=(event)=>{
        let code=String(event.target.value);
        if(code.length>=11){
            ReceiverServices.findBic(code).then((res)=>{
                setBic(code);
                setReceiver(res.data);
            });
        }
        else
        setErrmsg("Invalid BIC code");
    }
    const nameChangeHandler=(event)=>{
        let name=String(event.target.value);
        if(name==="bin laden" || name==="naeem" ||name==="veerappan"){
        setErrmsg("Please Hold the Transaction!!! Enquire the Sender");
        }
        else{
            setErrmsg("");
        setName(name);
        }
      }
      const dispatch=useDispatch();
      const next=(e)=>{
        if(errmsg===''){
        e.preventDefault();
        if(receiver.length===0)
        setErrmsg("BIC Not Found");
        else{
            dispatch(onreceive({
                bic:bic,
                institution:receiver.institution,
                beneficiar:name
            }))
        props.history.push("/transaction");
        }
    }
}
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Receiver</h3>
                            <h5 className="text-center text-danger">{errmsg}</h5>
                            <div className="card-body">
                                <form onSubmit={next}>
                                    <div className="form-group">
                                        <label>BIC : </label>
                                        <input placeholder="Enter BIC code" name="bic" className="form-control"
                                          onChange={bicChangeHandler} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Institution : </label>
                                        <span className="form-control">{receiver.institution}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Beneficiar Name : </label>
                                        <input placeholder="Enter Benificier Name" name="Benificier" className="form-control"
                                          onChange={nameChangeHandler} required/>
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

export default Receiver;