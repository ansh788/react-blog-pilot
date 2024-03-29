import React, { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Alert, Button, Label, Spinner, TextInput} from 'flowbite-react';
import OAuth from '../components/OAuth';

export default function Signup() {
  const [formData, setFormData]= useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

const handleChange = (e)=>{
  setFormData({...formData,[e.target.id]:e.target.value.trim()});
};
const handleSubmit = async (e)=>{
e.preventDefault();

if(!formData.username || !formData.email||!formData.password)
{
  return setErrorMessage('Please fill out all fields');
}

try{
  setloading(true);
  setErrorMessage(null);
  const res = await fetch('/api/auth/signup', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  console.log(data);
  if(data.success === false){
    return setErrorMessage(data.message);
  }
  if(res.ok)
  {
    navigate('/signin');
  }

  setloading(false);
} catch(error){
  setErrorMessage(error.message);
  setloading(false);
 }
}
  return (
    <div className='mt-20 min-h-screen'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
        <Link to="/" className='text-4xl font-bold dark:text-white'>
    <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Anshul's </span>Blog
    </Link>
    <p className='text-sm mt-5'>
      This is a demo project. You can sign up with your email and password or with Google.
    </p>
      </div>
      
        {/*right*/}
        <div className='flex-1'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className=''>
        <Label value='Your username'/>
        <TextInput type='text' placeholder='Username' id='username'onChange={handleChange}/>
        </div>
        <div className=''>
        <Label value='Your email'/>
        <TextInput type='email' placeholder='name@company.com' id='email'onChange={handleChange}/>
        </div>
        <div className=''>
        <Label value='Your password'/>
        <TextInput type='password' placeholder='Password' id='password'onChange={handleChange}/>
        </div>
        <Button gradientDuoTone="purpleToPink" type='submit' disabled={loading}>
          {
            loading?(
              <div>
              <Spinner size='sm'/>
              <span className='pl-3'>Loading...</span>
              </div>
            ):'Sign Up'
            
          }
        </Button>
          <OAuth/>
        </form>
        <div className='flex gap-2 text-sm mt-5'>
          <span>Have an account?</span>
          <Link to='/signin' className='text-blue-500'>Sign In</Link>
        </div>
        {
          errorMessage &&
           <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
        }
        </div>
      </div>
    </div>
  )
}
