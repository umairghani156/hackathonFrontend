import React from 'react'

const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const forgetPasswordHandler = async (e)=>{
        e.preventDefault()
        console.log('forget up')
    }
  return (
    <div>
         <form>
            <input type="email"  onChange={(e)=> setEmail(e.target.value)}/>
            <button onClick={forgetPasswordHandler}>Forget Password</button>

        </form>
    </div>
  )
}

export default ForgetPassword