import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Welcome(props) {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      Welcome {location.state && location.state.user}
      <br></br>
      <Link to='/list'>Go to your Task List</Link>
    </div>
  )
}

export default Welcome

