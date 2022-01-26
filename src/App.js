import React, { useState, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import { Display }from './Display';
import { FunctionComponentExample } from './FunctionComponentExample';
import { FetchDataClassExample } from './Component/FetchDataClassExample';
import { FetchDataFunctionalExample } from './Component/FetchDataFunctionalExample';
import UseReducerExample  from './Component/useReducer';
import SetStateFunctionComposition from './Component/setStateFunctionComposition';
import RefExample from './Component/Ref/RefEx';
import { Card } from './Component/Card';
import PortalExample from './Component/Portal';
import { CourseContext} from './Component/Context/ContextFile';
// import { myReducer } from './Component/useReducer'
import { FetchExample } from './Component/Ajax/FetchExample';
import { AxiosWithoutCancel } from './Component/Ajax/AxiosWithoutCancel';
import { AxiosWithCancel } from './Component/Ajax/AxiosWithCancel';
import UseCallbackExample from './Component/useCallback/useCallback';

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

function App() {
  const firstName = 'Mary';
  const displayColor = false;
  var colors = ['Red', 'Green', 'Blue', 'Red'];
  const [courseName, setCourseName] = useState('React');
  const [country, setCountry] = useState('')
  const  person = {
    id: 1,
    firstName: 'david',
    region: 'east'
  }

  const getDataFromChild = (childState) => {
    const {country} = childState
    setCountry(country);
    console.log(country);

  }
  
  // const [userName, setUserName] = useState('Mary');
  // const [region, setRegion] = useState('South');
  const initial_state = { course: courseName,  city: 'New york' }
  const [state, dispatch] = useReducer(myReducer,initial_state  );
  
  const Provider = CourseContext.Provider;
  return (

    <Provider value={{state, dispatch}}>
      <div >
        <div>
          my content
          <Display fname={firstName} person={person} sendDataToParent= {getDataFromChild}/>
          {country && <div>country name from child is {country}</div>}
          {/* { displayColor && colors.map((color, index) => {
            return <div key={index}>Color is {color}</div>
          
          })
        } */}
        {/* <FunctionComponentExample/> */}
      {/*  <FetchDataClassExample/> */}
        {/* <FetchDataFunctionalExample/> */}
        {/* <UseReducerExample/>
        <SetStateFunctionComposition/> */}
        <div>The course value in app component is {courseName}</div>
        {/* <RefExample /> */}
        {/* <Card>
          <div>Persson Name is {person.firstName}</div>
          <div>TItle</div>
          <div>Description</div>
        </Card> */}
        {/* <PortalExample/> */}
        {/* <FetchExample/> */}
        <AxiosWithoutCancel/>
        <AxiosWithCancel/>
        <UseCallbackExample/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
