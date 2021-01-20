import React from 'react';
import { useSelector } from 'react-redux';

//components
import User from '../components/User'

function Users() {
  const allUsers = useSelector(state => state.allUsers);
  const renderAllUsers = () => {
    return allUsers.map(u => {
      return <User key={u.name} name={u.name} id={u.id} username={u.username} email={u.email} phone={u.phone} website={u.website} />
    })
  }

  return (
    <div className="all_users">
      <h1>All Users</h1>
      <table className="responsive-table striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          {allUsers.length !== 0 ? renderAllUsers() : null}
        </tbody>
      </table>
    </div>
  )
}

export default Users




