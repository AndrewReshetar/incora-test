import React from 'react';
import { useHistory } from "react-router-dom";

function Posts({ id, title, body }) {
  const history = useHistory();
  const showPost = (id) => {
    history.push(`/posts/${id}/comments`);
  }
  return (
    <tr>
      <th>{id}</th>
      <td>{title}</td>
      <td>{body}</td>
      <td><button className="waves-effect waves-light btn" onClick={() => showPost(id)}>Details</button></td>
    </tr>
  )
}

export default Posts
