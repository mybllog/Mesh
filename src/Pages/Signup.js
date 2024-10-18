import React,{useState} from 'react'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faEye,
  faEyeSlash,
  faKey,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink, Router, useNavigation } from 'react-router-dom'
const Signup = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ confirmPassword , setConfirmPassword] = useState('')
  const [showPassword , setShowPassword] = useState(false)
  const [showsPassword,setShowsPassword] = useState(false)
  const handleShowPassword = (e) =>{
      e.preventDefault()
      setShowPassword(!showPassword)
  }

  const handleShowPasswords = (e) =>{
    e.preventDefault()
    setShowsPassword(!showsPassword)
}
  
  const handleSubmit = () =>{
    alert('registration not available right now')
  }

  
  return (
   <div className=' flex justify-center'>
     <div className='xl:hidden lg:hidden md:hidden w-10/12 h-50 relative  my-40 rounded-3xl bg-white shadow-xl'>
      <form onSubmit={handleSubmit}>
    <div className="mb-4">
    <div className='relative m-3'>
     <svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute my-3 m-4'>
<path d="M19.6628 0.105064H3.02417C1.88026 0.105064 0.954735 1.04099 0.954735 2.1849L0.944336 14.6639C0.944336 15.8078 1.88026 16.7437 3.02417 16.7437H19.6628C20.8067 16.7437 21.7427 15.8078 21.7427 14.6639V2.1849C21.7427 1.04099 20.8067 0.105064 19.6628 0.105064ZM19.6628 4.26473L11.3435 9.46432L3.02417 4.26473V2.1849L11.3435 7.38448L19.6628 2.1849V4.26473Z" fill="black"/>
</svg>
      <input type="email" required placeholder='example@gmail.com' className="w-full p-2 border bg-[#ECECEC] px-14 font-[Poppins] font-bold text-[#2F2F2F]" />
     </div>
    </div>
    <div className="mb-4">
    <div className='relative m-3'>
    <FontAwesomeIcon icon={faKey} className='absolute my-3 m-4'/>
<input
  type={showPassword ? 'text' : 'password'}
  required
  placeholder='Password'
  onClick={handleShowPassword}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full p-2 border bg-[#ECECEC] px-14 font-[Poppins] font-bold text-[#2F2F2F]"
/>
<button
  type="button"
  className="absolute right-4 top-1/2 transform -translate-y-1/2"
  onClick={handleShowPassword}
>
  {showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
</button>
</div>

    </div>
    <div className="mb-4">
    <div className='relative m-3'>
<FontAwesomeIcon icon={faKey} className='absolute my-3 m-4'/>
<input
  type={showsPassword ? 'text' : 'password'}
  required
  placeholder='Confirm Password'
  onClick={handleShowPasswords}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full p-2 border bg-[#ECECEC] px-14 font-[Poppins] font-bold text-[#2F2F2F]"
/>
<button
  type="button"
  className="absolute right-4 top-1/2 transform -translate-y-1/2"
  onClick={handleShowPasswords}
>
  {showsPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
</button>
</div>
    </div>
    <div className=' grid grid-cols-2'>
    <div className=' flex space-x-3 relative left-4'>
      <input type='checkbox'  className=' bg-[#D9D9D9]  checked:active:text-white text-[#D9D9D9] font-[Poppins] text-base font-normal'/>
      <p>Remember me</p>
     </div>
     <div className=' flex float-end justify-end '>
     <p className='text-[#6DA8FF]  text-base  font-normal font-[Poppins]'>Forgot Password?</p>
     </div>
    </div>
    <button type='submit'  className="bg-[#6DA8FF] text-white mt-5 p-2 w-full rounded">Register</button>

    <div className="text-sm mt-5  text-center">
      <p>
        Already have an account? <button className="text-blue-500" ><NavLink to="/sign-in">Login</NavLink></button>
      </p>
    </div>
  </form>
    </div>
   </div>
  )
}

export default Signup