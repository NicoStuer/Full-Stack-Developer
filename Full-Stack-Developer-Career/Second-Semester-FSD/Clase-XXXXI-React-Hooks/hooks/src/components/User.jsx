/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const User = ({user}) => {
  return (
    <div>
      <h3>{user.name.first}{user.name.last}</h3>
      <p>{user.email}</p>
      <img src={user.picture.medium} />
    </div>
  )
}

export default User
