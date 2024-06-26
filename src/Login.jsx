import React from 'react'
import { useState } from 'react'
import { auth } from './firebase'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await signInWithEmailAndPassword(auth,email,password)
            console.log('Login Success');
            toast.success('Login Successful')
        }
        catch(err){
            console.log();
            toast.error('Failed to Login. Try again')
        }
    }
  return (
   <div className="signup-container">
    <form action="" className="signup-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="email">
            Email:
            <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
        </label>
        <label htmlFor="password">
            Password:
            <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button type='submit'>Login</button><br />
        <p>Don't have account?
            <Link to='/signup'>Register</Link>
        </p>
    </form>
    <ToastContainer /> 
   </div>
  )
}

export default Login