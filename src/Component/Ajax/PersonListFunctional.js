import React, { useState, useEffect } from 'react';

import axios from 'axios';

function PersonListFunctional() {

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        console.log(persons);
        setPersons(persons) ;
      })
  },[]) ;

  
    return (
      <ul>
        { persons.map((person,index) => <li key={index}>Name: {person.name}</li>)}
      </ul>
    )
}

export default PersonListFunctional;