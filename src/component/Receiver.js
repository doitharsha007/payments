import React from 'react';

function Receiver(props){
    return(
        <div class="receiver">
            <table align="center">
                <tr><th align="center" colspan="2"><h3>Receiver Details</h3></th></tr>
                <tr>
                    <td class="left"><label>Bic : </label></td>
                    <td class="right"><input type="text" onChange={props.bicchanged}/></td>
                </tr>
                <tr>
                    <td class="left"><label>Institution name : </label></td>
                    <td class="right"><p>{props.institution}</p></td>
                </tr>
                <tr>
                    <td class="left"><label>Account Holder Benificiary name : </label></td>
                    <td class="right"><input type="text" onChange={props.namechanged}/></td>
                </tr>
            </table>
            <p>{props.prompt}</p>
        </div>
    );
}
export default Receiver;