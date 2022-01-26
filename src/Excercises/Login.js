import React from 'react';


function Login() {
    return(
        <div>
            <div style={{height:500, width:500, border:'1px solid black', margin:100}}>
               UserName: <input type="text" /><br/>
               Password: <input type="password"/>
            </div>
        </div>
    )
} 

export default Login;