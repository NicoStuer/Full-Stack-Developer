/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import { userContext } from '../context/userContext';

const Four = () => {
    const {user, setUser} = useContext(userContext);
    const handleChange = () => {
      setUser({name:"Niquito", role:"The man"})
    }

    return (
    <>
      <h1>Component Four</h1>
      <p>It is the only one that needs the user</p>
      <p>User:{user.name}</p>
      <p>Rol:{user.role}</p>
      <button onClick={handleChange}>Change it!</button>
    </>
  );
}

export default Four
