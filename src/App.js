import React, { useEffect } from 'react';
//pages
import Users from './pages/Users';
import Posts from './pages/Posts';
import AllPosts from './pages/AllPosts';
import Post from './pages/Post';
import Nav from './components/Nav';
import CreatePost from './components/CreatePost';
//config
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllUsers, getAllPosts } from './actions'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Users} />
      <Route exact path="/all_posts" component={AllPosts} />
      <Route exact path="/posts/:userId?" component={Posts} />
      <Route path="/posts/:id?/comments" component={Post} />
      <Route path="/create_post" component={CreatePost} />
    </div>
  );
}

export default App;
