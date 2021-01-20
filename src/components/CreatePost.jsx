import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { sendPost } from '../actions';
import { useHistory } from 'react-router-dom';

function CreatePost() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const sendPostHandler = (e) => {
    e.preventDefault()
    if (userId && title && body) {
      dispatch(sendPost(Number(userId), title, body))
      history.push('/all_posts');
    }
    setUserId('');
    setTitle('');
    setBody('');
  }

  return (
    <div>
      <form>
        <input type="number" placeholder="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />
        <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="body" value={body} onChange={(e) => setBody(e.target.value)} />
        <button onClick={(e) => sendPostHandler(e)} className="btn waves-effect waves-light" type="submit">Submit
            <i className="material-icons right">send</i>
        </button>
      </form>
    </div>
  )
}

export default CreatePost
