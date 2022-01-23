import React, { useState, useReducer } from 'react';



 
function SetStateFunctionComposition() {

    const [userName, setUserName] = useState('Mary');
    const [region, setRegion] = useState('South');


    
    const setInput  = (setter) => (event) => {
        setter(event.target.value);
    }

  return (
    <div>
    
      <div><input type="text" value={userName} name="userName" onChange={setInput(setUserName)}/></div>
      <div><input type="text" value={region} onChange={setInput(setRegion)}/></div>
      <div>
       <p>Name : {userName} </p>
       <p>Region : {region}</p>
      </div>
    </div>
  );
}

export default SetStateFunctionComposition;