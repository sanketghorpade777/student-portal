import React from 'react'
import axios from 'axios';
import { useLocation } from 'react-router-dom'
function Home() {

  const location = useLocation();
  return (
    <div>Home 
      {location.state.id}
      </div>
  )
}

export default Home