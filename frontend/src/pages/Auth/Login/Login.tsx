import React from 'react'
import CustomInput from '../../../components/modules/CustomInput/CustomInput'

function Login() {
  return (
     <form className='border border-neutral-tertiary rounded-[61px] p-7  flex flex-col  gap-6'>
        <CustomInput inputType='text' labelText='نام کاربری' placeholder='' className='w-full'/>
        <CustomInput inputType='password' labelText='رمز عبور' placeholder='admin' className='w-full'/>

        <button type='submit' className='bg-neutral-tertiary text-center text-gray-black text-2xl rounded-[55px] h-[46px] w-[150px] self-center'>ورود به حساب</button>
    </form>
  )
}

export default Login