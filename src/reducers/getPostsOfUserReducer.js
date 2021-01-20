export const getPostsOfUserReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS_OF_USER': return [...action.payload]
    default: return state;
  }
}