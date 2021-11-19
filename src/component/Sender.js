import React from 'react';
 function Sender(props){
     return(
         <div class="sender">
             <table align="center">
                 <tr><th align="center" colspan="2"><h3>Sender Details</h3></th></tr>
                 <tr>
                     <td class="left">
                     <label>Customer Id : </label>
                     </td>
                     <td class="right">
                     <input type="text" onChange={props.changed}/>
                     </td>
                 </tr>
                 <tr class="name">
                     <td class="left">Account Holder Name : </td>
                     <td class="right">{props.accountHolderName}</td>
                 </tr>
                 <tr class="balance">
                     <td class="left">Clear Balance : </td>
                     <td class="right">{props.clearBalance}</td>
                 </tr>
             </table>
             
         </div>
     );
 }
 export default Sender;