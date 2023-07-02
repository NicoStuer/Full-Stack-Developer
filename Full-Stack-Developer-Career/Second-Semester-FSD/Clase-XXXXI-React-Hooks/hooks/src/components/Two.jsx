/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import { userContext } from '../context/userContext';
import Three from './Three'

const Two = () => {
    const user = useContext(userContext)
    return (
        <>
          <h1>Component Two</h1>
          <p>Neither need the user...<small>{user.role}</small></p>
          <Three/>
        </>
      );
}

export default Two
