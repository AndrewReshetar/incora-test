import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function AllPosts() {
  const [created, setCreated] = useState([]);

  useEffect(() => {
    localStorage.getItem('createdPost') ? setCreated(JSON.parse(localStorage.getItem('createdPost'))) : setCreated([]);
  }, []);

  let allPosts = useSelector(state => state.allPosts);
  if (created.length !== 0) {
    allPosts = [...allPosts, ...created];
  }
  const renderPosts = () => {
    return allPosts.map(p => {
      return (
        <tr key={p.title}>
          <th>{p.id}</th>
          <td>{p.title}</td>
          <td>{p.body}</td>
        </tr>
      )
    })
  }
  return (
    <div className="all_posts">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>All Posts</h1>
      </div>
      <div id="modal"></div>
      <table className="responsive-table striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {allPosts.length !== 0 ? renderPosts() : null}
        </tbody>
      </table>
    </div>
  )
}

export default AllPosts;
