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

          <h1 className=' text-center'>Mesh</h1>
        
          
          <div className="">
         <h2 className="text-lg font-bold text-center">{activeForm === 'login' ? 'Login' : activeForm === 'signup' ? 'Create account' : activeForm === 'forgetPassword' ? 'Forget Password' : 'Reset Password'}</h2>
         
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
    <form>
      <div className="mb-4">
        <label>Email</label>
        <input type="email" className="w-full p-2 border" />
      </div>
      <div className="mb-4">
        <label>Password</label>
        <input type="password" className="w-full p-2 border" />
      </div>
      <button className="bg-blue-500 text-white p-2 w-full rounded">Login</button>

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
        <label>Email</label>
        <input type="email" className="w-full p-2 border" />
      </div>
      <button className="bg-yellow-500 text-white p-2 w-full rounded">Send Reset Link</button>

      <div className="text-sm mt-4">
        <p>
          Remember your password? <button onClick={() => onSwitchForm('login')} className="text-blue-500">Login</button>
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
