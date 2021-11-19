import React from 'react';

function Transaction(){
    return(
        <div class="transaction">
            <table align="center">
                <tr><th align="center" colspan="2"><h3>Transaction Details</h3></th></tr>
                <tr>
                    <td class="left"><label>Transaction Type :</label></td>
                    <td class="right">
                        <select>
                            <option>select</option>
                            <option>Customer Transfer</option>
                            <option>Bank Transfer</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td class="left"><label>Message Code :</label></td>
                    <td class="right">
                    <select>
                    <option>select</option>    
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
                    </td>
                </tr>
                <tr>
                    <td class="left"><label>Amount :</label></td>
                    <td class="right"><input type="text"/></td>
                </tr>
                <tr>
                    <td class="left"><label>Total Transfer Amount(+0.25%) :</label></td>
                    <td class="right"></td>
                </tr>
                <tr>
                    <td class="left"><label>Clear Balance :</label></td>
                    <td class="right"></td>
                </tr>
            </table>
        </div>
    );
}
export default Transaction;