import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/authContext'

function Header() {
  const authContext = useContext(AuthContext)
  
  return (
    <div className='w-full h-16 bg-green-200 flex justify-center items-center font-bold text-4xl'>
      Task Manager
      {
        authContext.isAuth ?
          <Link to={'/'} onClick={()=> authContext.setIsAuth(false)}
            className='absolute flex items-center justify-center right-2 text-base border border-green-500 bg-green-400 rounded-[50%] h-16 w-16 top-8'>
            Logout
          </Link> :
          <Link to={'/login'} 
            className='absolute flex items-center justify-center right-2 text-base border border-green-500 bg-green-400 rounded-[50%] h-16 w-16 top-8'>
            Login</Link>
      }
    </div>
  )
}

export default Header
