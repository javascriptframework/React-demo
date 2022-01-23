import React, { useState, useReducer } from 'react';

export const myReducer = (state,action) => {
  
   switch(action.type) {
      case 'updateUserName':
        return { ...state, userName: action.payload}
      case 'updateRegion' :
        return { ...state, region: action.payload}
        case 'update_course' : 
        return { ...state, course : action.payload}
      default:
        return state;
    }
  
}

function UseReducerExample() {
  
  const initial_state = {userName: 'Mary', region:'North', country: 'USA'}
  // const [userName, setUserName] = useState('Mary');
  // const [region, setRegion] = useState('South');
  const [state, dispatch] = useReducer(myReducer, initial_state );
 

  return (
    <div>
    
      <div><input type="text" value={state.userName} onChange={(e)=> dispatch({type: 'updateUserName', payload: e.target.value })}/></div>
      <div><input type="text" value={state.region} onChange={(e)=> dispatch({type: 'updateRegion', payload: e.target.value })}/></div>
      <div>
       <p>Name : {state.userName} </p>
       <p>Region : {state.region}</p>
      </div>
    </div>
  );
}

export default UseReducerExample;