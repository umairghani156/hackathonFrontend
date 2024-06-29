import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   
    const signUpHandler = async (e)=>{
        e.preventDefault()
        console.log('log up')
    }
  return (
    <div>
        <form>
            <input type="email"  onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password"  onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={signUpHandler}>Signup</button>

        </form>
    </div>
  )
}

export default Login