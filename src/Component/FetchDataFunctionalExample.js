import React, { useState, useEffect } from 'react';

export function FetchDataFunctionalExample() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userList, setUserList] = useState([]);

  
  // this useEffect will run only once due to empty deps array [] 
  // similar to componentDidMount()
   useEffect(() => {
    fetch("https://api.github.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setUserList(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {userList.map(user => (
          <li key={user.id}>
            user name: {user.login} | type:{user.type}
          </li>
        ))}
      </ul>
    );
  }
}