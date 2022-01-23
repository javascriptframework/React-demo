import React from 'react';
import { MaterialTable } from './MaterialTable';

export class FetchDataClassExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        userList: []
      };
    }
  
    async componentDidMount() {
      try {
          const res = await fetch("https://api.github.com/users")
          const users = await res.json();
          this.setState({
              isLoaded: true,
              userList: users,
          });
      } catch (error) {        
          this.setState({
              isLoaded: true,
              error
          });    
      }
    }
  
    render() {
      const { error, isLoaded, userList } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <>
          <table  className="fetchTable" >
            
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>User Type</th>
                  </tr>
              </thead>
              <tbody>
                
                  {userList.length ? userList.map((user) => (
                      <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.login}</td>
                          <td>{user.type}</td>
                      </tr>
                  )) : <div>Loading....</div>}
              </tbody>
          </table>
          <MaterialTable users={userList}/>
          </>
          
        );
      }
    }
  }
