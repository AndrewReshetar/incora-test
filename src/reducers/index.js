import { combineReducers } from 'redux';
import { getAllUsersReducer } from './getAllUsersReducer';
import { getPostsOfUserReducer } from './getPostsOfUserReducer';
import { getChosenPostReducer } from './getChosenPostReducer';
import { getComments } from './getCommentsReducer';
import { createPostReducer } from './createPostReducer';
import { getAllPostsReducer } from './getAllPostsReducer';

export const rootReducer = combineReducers({
  allUsers: getAllUsersReducer,
  postsOfUser: getPostsOfUserReducer,
  chosenPost: getChosenPostReducer,
  comments: getComments,
  createdPost: createPostReducer,
  allPosts: getAllPostsReducer
});