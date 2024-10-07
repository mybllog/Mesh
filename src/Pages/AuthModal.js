// AuthModal.js
import React, { useState } from 'react';

const AuthModal = ({ showModal, handleClose }) => {
  const [activeForm, setActiveForm] = useState('login'); // Track the active form

  const handleSwitchForm = (formName) => {
    setActiveForm(formName);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-5">
        <div className=" justify-between items-center">
        <button onClick={handleClose} className="text-gray-500 hover:text-black relative float-left left-96 ">
            &times;
          </button>

          <h1 className=' text-center font-bold font-newRomain text-3xl'>Mesh</h1>
        
          
          <div className="">
         <h2 className="text-lg font-bold text-center font-newRomain">{activeForm === 'login' ? 'Login' : activeForm === 'signup' ? 'Create account' : activeForm === 'forgetPassword' ? 'Forget Password' : 'Reset Password'}</h2>
         
         </div>
        </div>

        <div className="mt-4">
          {activeForm === 'login' && (
            <LoginForm onSwitchForm={handleSwitchForm} />
          )}
          {activeForm === 'signup' && (
            <SignUpForm onSwitchForm={handleSwitchForm} />
          )}
          {activeForm === 'forgetPassword' && (
            <ForgetPasswordForm onSwitchForm={handleSwitchForm} />
          )}
          {activeForm === 'resetPassword' && (
            <ResetPasswordForm onSwitchForm={handleSwitchForm} />
          )}
        </div>
      </div>
    </div>
  );
};

const LoginForm = ({ onSwitchForm }) => {
  const handleSubmit= () =>{
    alert('login not  found')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label>Email</label>
        <input type="email" className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label>Password</label>
        <input type="password" className="w-full p-2 border" />
      </div>
      <button type='submit' className="bg-blue-500 text-white p-2 w-full rounded">Login</button>

      <div className="text-sm mt-4">
        <p>
          Don’t have an account? <button onClick={() => onSwitchForm('signup')} className="text-blue-500">Sign Up</button>
        </p>
        <p>
          Forgot your password? <button onClick={() => onSwitchForm('forgetPassword')} className="text-blue-500">Reset Password</button>
        </p>
      </div>
    </form>
  );
};

const SignUpForm = ({ onSwitchForm }) => {
  const handleSubmit = () =>{
    alert('registration not available right now')
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label>Name</label>
        <input type="text" required className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label>Email</label>
        <input type="email" required className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label>Password</label>
        <input type="password"  required className="w-full p-2 border" />
      </div>
      <button type='submit'  className="bg-[#6DA8FF] text-white p-2 w-full rounded">Register</button>

      <div className="text-sm mt-4  text-center">
        <p>
          Already have an account? <button onClick={() => onSwitchForm('login')} className="text-blue-500">Login</button>
        </p>
      </div>
    </form>
  );
};

const ForgetPasswordForm = ({ onSwitchForm }) => {
  return (
    <form>
      <div className="mb-4">
       <div className='relative m-3'>
       <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute my-3 m-4'>
<path d="M19.6628 0.105064H3.02417C1.88026 0.105064 0.954735 1.04099 0.954735 2.1849L0.944336 14.6639C0.944336 15.8078 1.88026 16.7437 3.02417 16.7437H19.6628C20.8067 16.7437 21.7427 15.8078 21.7427 14.6639V2.1849C21.7427 1.04099 20.8067 0.105064 19.6628 0.105064ZM19.6628 4.26473L11.3435 9.46432L3.02417 4.26473V2.1849L11.3435 7.38448L19.6628 2.1849V4.26473Z" fill="black"/>
</svg>
        <input type="email" placeholder='example@gmail.com' className="w-full p-2 border bg-[#ECECEC] px-14 font-[Poppins] font-bold text-[#2F2F2F]" />
       </div>
       <div className=' flex space-x-3 relative left-4'>
        <input type='checkbox'  className=' bg-[#D9D9D9]  checked:active:text-white text-[#D9D9D9] font-[Poppins] text-base font-normal'/>
        <p>Remember me</p>
       </div>
      </div>
      <button className="bg-[#6DA8FF] text-white p-2 w-full rounded">Reset Password</button>

      <div className="text-sm mt-4 justify-center text-center">
        <p>
        Have an account? <button onClick={() => onSwitchForm('login')} className="text-blue-500">Sign in </button>

        </p>
      </div>
      <div className="text-sm mt-4 justify-center text-center">
        <p>
        Don’t have an account? <button onClick={() => onSwitchForm('signup')} className="text-blue-500"> Register </button>
        
        </p>
      </div>
    </form>
  );
};

const ResetPasswordForm = ({ onSwitchForm }) => {
  return (
    <form>
      <div className="mb-4">
        <label>New Password</label>
        <input type="password" className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label>Confirm New Password</label>
        <input type="password" className="w-full p-2 border" />
      </div>
      <button className="bg-red-500 text-white p-2 w-full rounded">Reset Password</button>

      <div className="text-sm mt-4">
        <p>
          Go back to <button onClick={() => onSwitchForm('login')} className="text-blue-500">Login</button>
        </p>
      </div>
    </form>
  );
};

export default AuthModal;
