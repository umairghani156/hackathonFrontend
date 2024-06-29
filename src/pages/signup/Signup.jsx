import React, { useState } from 'react'
import axios from 'axios';

const Signup = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const signUpHandler = async (e)=>{
        e.preventDefault()
       const response = await axios.post("https://hackathonbackend-alpha.vercel.app/api/auth/signup", {firstName,lastName,email,password,cPassword});
       console.log(response);
       localStorage.setItem("token",response.data.token);
    }
  return (
    <div>
        <form>
            <input type="text" placeholder='firstname' onChange={(e)=> setFirstName(e.target.value)}/>
            <input type="text" placeholder='lastname'  onChange={(e)=> setLastName(e.target.value)}/>
            <input type="email" placeholder='email'  onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password"  placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
            <input type="password" placeholder='confirm password'  onChange={(e)=> setCPassword(e.target.value)}/>
            <button onClick={signUpHandler}>Signup</button>

        </form>
    </div>
  )
}

export default Signup