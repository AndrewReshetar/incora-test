import React from 'react';
import { useHistory } from "react-router-dom";

function User({ id, name, username, email, phone, website }) {
  const history = useHistory();
  const sendToPostsHandler = (id) => {
    history.push(`/posts?userId=${id}`)
  }
  return (
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{website}</td>
      <td><button className="waves-effect waves-light btn" onClick={() => sendToPostsHandler(id)}>Posts</button></td>
    </tr>
  )
}

export default User
