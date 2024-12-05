import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/authContext';

function FailureComp(){
    return <div> Auth Failed</div>
}

function LoginComponent() {
  const [user , setUser] = useState('Aathi');
  const [Password, setPassword] = useState('');
  const [failureAuth , setFailureAuth] = useState(false);

  const navigate = useNavigate();
  const authContext = useContext(AuthContext);

  const handleSubmit = ()=>{
    if(user === 'Aathi' && Password === '123'){
      setFailureAuth(false);
      
      authContext.setIsAuth(true);

      navigate('/welcome' , {state:{user}})
    }
    else{
      setFailureAuth(true);
      setSuccessAuth(false);
    }
  }

  return (
    <div className='h-full w-full flex flex-col justify-center items-center'>
    <div className='p-10 bg-green-200 flex flex-col items-start justify-center gap-4 rounded '>
      <div className='w-full flex justify-between'>
        <label>Name : </label>
        <input className='border border-black' placeholder='Name' value={user} onChange={(e)=>setUser(e.target.value)}/>
      </div>
      <div className='w-full flex justify-between gap-2'>
        <label>Password : </label>
        <input type='password' className='border border-black' placeholder='Password' value={Password} onChange={(e)=>setPassword(e.target.value)} />
      </div>
      <div className='w-full flex justify-center '>
        <button type='submit' onClick={handleSubmit}  className='border border-black px-1 py-2 rounded'>Login</button>
      </div>
    </div>
    { failureAuth &&  <FailureComp/>}
    </div>
  )
}

export default LoginComponent
