import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div>
      <h2>PageNotFound</h2>
      <Link to="/">Home</Link>
    </div>
  )
}

export default PageNotFound
