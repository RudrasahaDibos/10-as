import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import  auth  from '../../../firebase.init';
import  './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';


const Resgister = () => {
const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating,updatererror] = useUpdateProfile(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/home');
    }

    const handleCreateUser = async (event) =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer');
            return;
        }
        
       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName:confirmPassword });
       console.log('Updated profile');
       navigate('/home');
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <div className='flex'>
                        <label htmlFor="email">Email</label>
                      
                      <input onBlur={handleEmailBlur} type="email" name="email" id=""  placeholder='Enter-Email'   required/>
                        </div>
                    </div>
                    <div className="input-group">
                          <div className='flex' >
                          <div>
                         <label htmlFor="password">password</label>
                         </div>
                         <div>
                         <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Enter-password'  required/>
                         </div>
                          </div>
                    </div>
                    <div className="input-group">
                          <div className='flex'>
                          <label htmlFor="confirm-password">confrimpassword</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" placeholder='Enter-confrim-password' />
                          </div>
                           
                    </div>
                     
                   
                    <p style={{color: 'red'}}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up"  required/>
                </form>
                <p className='form-linkk'>
                   
                    Already Have an account? <Link className='form-link' to="/login">Login</Link>
                   <SocialLogin></SocialLogin>
                </p>
            </div>
        </div>
    );
};

export default Resgister;