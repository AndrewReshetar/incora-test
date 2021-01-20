import React, { useState, useEffect } from 'react';
import Comments from '../components/Comments';
import { getChosenPost } from '../actions';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";

function Post() {
  const [idOfPost, setIdOfPost] = useState('');
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const id = Number(location.pathname.split('/')[2]);
    setIdOfPost(id);
    dispatch(getChosenPost(id))
  }, [dispatch, location.pathname]);

  const chosenPost = useSelector(state => state.chosenPost);

  return (
    <div className="chosen_post">
      <h3>{`Post With ID ${idOfPost}`}</h3>
      <table className="responsive-table striped">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(chosenPost).length !== 0 ? (
            <>
              <tr>
                <th>{chosenPost.userId}</th>
                <td>{chosenPost.title}</td>
                <td>{chosenPost.body}</td>
              </tr>
            </>
          ) : null}
        </tbody>
      </table>
      <Comments />
    </div>
  )
}

export default Post
