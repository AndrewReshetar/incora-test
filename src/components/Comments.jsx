import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getComments } from '../actions';
import { useLocation } from "react-router-dom";

function Comments() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const id = Number(location.pathname.split('/')[2]);
    dispatch(getComments(id));
  }, [dispatch, location])

  const renderComment = () => {
    return comments.map(c => {
      return (
        <div key={c.id} style={{ backgroundColor: 'rgb(248,248,248)' }}>
          <h5 style={{ color: 'rgb(38,166,154)' }}>{c.email}</h5>
          <p>{c.body}</p>
        </div>
      )
    })
  }

  const comments = useSelector(state => state.comments);
  return (
    <div>
      <h1>Comments</h1>
      {comments.length !== 0 ? (
        <div className="comments">
          {renderComment()}
        </div>
      ) : null}
    </div>
  )
}

export default Comments
