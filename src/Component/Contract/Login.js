
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button } from 'react-bootstrap';
import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
  const emailRef =useRef('');
  const passwordRef =useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;

  const [
    signInWithEmailAndPassword,
    user,
   
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
    auth
  );
  if(user){
    navigate(from, { replace: true });
  }
  if (error) {
       
    errorElement=  <div>
        <p className='text-danger'>Error: {error.message}</p>
      </div>
  
  }
  if (sending) {
    return <p>Sending...</p>;
  }

  const handleSubmit =event =>{
    event.preventDefault();
    const email=emailRef.current.value;
    const password =passwordRef.current.value;
    console.log(email,password);
    signInWithEmailAndPassword(email,password)
  }
  const NavigateRegister=event=>{
    navigate('/register')
  }
  const Navigatefogetpassword= async()=>{
    const email=emailRef.current.value;
    await sendPasswordResetEmail(email);
    alert('Sent email');
  }
    return (
        <div className='container w-50 mx-auto'>
            <h1 className="text-primary text-center bodergti">Login</h1>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref={emailRef} type="email" placeholder="Enter email"  required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  <Button variant="primary w-100" type="submit">
      Login
  </Button>
 
</Form>
{errorElement}
      <p className='text-center'>Create a new account ? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={NavigateRegister}>Register Now</Link></p>
      <p className='text-center'>Forget password? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={Navigatefogetpassword}>Reset password</Link></p> 
        <SocialLogin></SocialLogin>
        </div>
        
    );
};

export default Login;