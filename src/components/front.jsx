import React from 'react'
import { Link } from 'react-router-dom'

export default function Front() {
  return (
    <div>
    <div></div>
    <div>
      <br />
      <Link to="create"> Create</Link>
      <br />
      <Link to="show-list">Show List</Link>
      <br />
    </div>
  </div>
  )
}
