import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/" className="waves-effect waves-light btn">All Users</Link></li>
        <li><Link to="/all_posts" className="waves-effect waves-light btn">All Posts</Link></li>
        <li><Link to="/create_post" className="waves-effect waves-light btn">Create a Post</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
