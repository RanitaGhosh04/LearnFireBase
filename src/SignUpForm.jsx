import React, { useState } from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const SignUpForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            await createUserWithEmailAndPassword(auth,email,password)
            console.log('Account Created');
            toast.success('Account created successfully!')
        }
        catch(err){
            console.log();
            toast.error('Failed to create account. Please try again.')
        }
    }
  return (
   <div className="signup-container">
    <form action="" className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <label htmlFor="email">
            Email:
            <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
        </label>
        <label htmlFor="password">
            Password:
            <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button type='submit'>Sign Up</button><br />
        <p>Already Registered?
            <Link to='/login'>Login</Link>
        </p>
    </form>
    <ToastContainer /> 
   </div>
  )
}

export default SignUpForm