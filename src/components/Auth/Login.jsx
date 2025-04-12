import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [showPassword, setshowPassword] = useState(false)
  const [form, setForm] = useState({ email: '', password: '' })

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    


  }


  const submitHandler = (e) => {
    e.preventDefault()
    {handleLogin(form.email,form.password)}
    setForm({email:'',password:''})
  }


  const togglePasswordVisibility = (e) => {
    e.preventDefault()
    setshowPassword(!showPassword)


  }

  return (
    <>

      <div className='w-screen h-screen bg-[#1C1C1C] flex flex-col justify-center items-center'>
        <h1 className='text-white absolute left-6 top-10 text-2xl font-bold'>Login</h1>

        <div className='w-4/5 max-w-md mb-10'>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}

            className='flex flex-col'>
            <input
              onChange={(e) => {
                changeHandler(e)
              }}
              value={form.email}
              name='email'
              required className='focus:bg-white focus:text-black text-white mb-4 py-2 px-4 border-2 border-red-400 rounded-3xl outline-none focus:border-3 placeholder:text-gray-400' type="email" placeholder='Email' />

            <div className='relative'>
              <input
              value={form.password}
                name='password'
                onChange={(e) => {
                  changeHandler(e)
                }}
                required className='focus:bg-white focus:text-black w-full  text-white py-2 px-4 border-2 border-red-400 rounded-3xl outline-none focus:border-3 placeholder:text-gray-400' type={showPassword ? 'text' : 'password'} placeholder='Password' />
              <button type='button' className='absolute  right-5 -translate-y-1/2 top-1/2 text-gray-400'
                onClick={togglePasswordVisibility}>{showPassword ? 'Hide' : 'Show'}</button>
            </div>
            <button className='mt-4 bg-red-400 rounded-3xl text-white font-bold py-2'>Log In</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
