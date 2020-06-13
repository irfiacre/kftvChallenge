import React from 'react';

export default()=>{
    return(
        <div>
           <h1>Welcome to Kftv movie boutique</h1>
            <h5>Please <b onClick={()=> window.location.assign('/login')}>login</b> to start using our services.</h5>
        </div>
        )
}