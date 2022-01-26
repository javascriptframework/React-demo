import React from 'react';
import { MaterialTable } from '../MaterialTable';
import axios from 'axios';

export class FetchExample extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        users: []
      };
    }
  
    componentDidMount() {
      axios.get("https://api.github.com/users")
        .then((result) => {
          console.log(result);
          debugger;
            this.setState({
              isLoaded: true,
              users: result.data,
              apiloaded: true,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, users } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <>
                <h2>Users list</h2>
                <ul>
                    {users.map(user => (
                    <li key={user.id}>
                        {user.login}
                    </li>
                    ))}
                </ul>
                <table style={{border:'1px solid black'}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>User Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.login}</td>
                                <td>{user.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               {users &&  <MaterialTable users={users}/>}
            </>
        );
      }
    }
  }