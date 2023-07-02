/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import User from './User'

const UsersList = ( {users} ) => {
  return (
    <>
        <h2>Lista de Usuarios</h2>
        <section>
            {users.map((usr) => <User key={usr.id+usr.phone} user={usr}/> )}
        </section>
      
    </>
  )
}

export default UsersList
