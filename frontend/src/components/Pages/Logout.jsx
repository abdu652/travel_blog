import React from 'react'
import Home from './Home.jsx'
function Logout() {
   const logout = ()=>{
      localStorage.removeItem('employee');
      localStorage.removeItem('userId');
      window.location.href = '/';
   }
  return (
    <div>
      <Home/>
    </div>
  )
}

export default Logout
