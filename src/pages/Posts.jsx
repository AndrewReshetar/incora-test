import React, { useState, useEffect } from 'react';
import { getPostsOfUser } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from "react-router-dom";
//components
import Post from '../components/Post';

function Posts() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [idOfUser, setIdOfUser] = useState('');

  useEffect(() => {
    const id = location.search ? Number(location.search.split('=')[1]) : null;
    setIdOfUser(id);
    dispatch(getPostsOfUser(id));
  }, [dispatch, location]);

  let posts = useSelector(state => state.postsOfUser);

  const renderPosts = () => {
    return posts.map(p => {
      return <Post key={p.title} id={p.id} title={p.title} body={p.body} />
    })
  }

  return (
    <div className="all_posts">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1>{`Posts of User With ID ${idOfUser}`}</h1>
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
          {posts.length !== 0 ? renderPosts() : null}
        </tbody>
      </table>
    </div>
  )
}

export default Posts
