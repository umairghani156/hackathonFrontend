import React, { useState } from 'react'

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const resetPasswordHandler = async (e) => {
        e.preventDefault()
        console.log(newPassword, confirmNewPassword)
    }
    return (
        <div>
            <form className="inputWrappers">
                <div className="inputChilds">
                    <input type="password" name="password" placeholder='New Password' className='password' id="" onChange={(e) => setNewPassword(e.currentTarget.value)} />
                </div>
                <div className="inputChilds">
                    <input type="password" name="cPassword" placeholder='Confrim new Password' id="" className='cPassword' onChange={(e) => setConfirmNewPassword(e.currentTarget.value)} />
                </div>
                <button className="btn" onClick={resetPasswordHandler}>Reset Password</button>
            </form>
        </div>
    )
}

export default ResetPassword