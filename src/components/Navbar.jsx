import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';

import { auth } from '../firebase'
// import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
 const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <span className="logo">{currentUser.displayName}</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
      
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar