import React from 'react';

function DisplayDate(){
    return(
        <div class="date">
            {Date().toLocaleString()}
        </div>
    );
}
export default DisplayDate;