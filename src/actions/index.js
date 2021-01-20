import axios from 'axios';

export const getAllUsers = () => async (dispatch) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch({
    type: 'GET_ALL_USERS',
    payload: data
  });
}

export const getAllPosts = () => async (dispatch) => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
  dispatch({
    type: 'GET_ALL_POSTS',
    payload: data,
  });
}

export const getPostsOfUser = (id) => async (dispatch) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  dispatch({
    type: 'GET_POSTS_OF_USER',
    payload: data
  });
}

export const sendPost = (userId, title, body) => async (dispatch) => {
  const config = {
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  }

  const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', { userId, title, body }, config);

  dispatch({
    type: 'CREATE_POST',
    payload: data
  })

}


export const getChosenPost = (id) => async (dispatch, getState) => {
  dispatch({
    type: 'GET_CHOSEN_POST',
    payload: getState().postsOfUser.find(p => p.id === id)
  });
}

export const getComments = (id) => async (dispatch, getState) => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
  dispatch({
    type: 'GET_COMMENTS',
    payload: data
  });
}



