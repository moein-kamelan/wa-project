import React from 'react'
import CustomInput from '../../../components/modules/CustomInput/CustomInput'

function Register() {
  return (
    <form className='border border-neutral-tertiary rounded-[61px] p-7  flex flex-col  gap-6'>
        <CustomInput inputType='text' labelText='نام' placeholder='علی' className='w-full'/>
        <CustomInput inputType='text' labelText='نام خانوادگی' placeholder='محمدی' className='w-full'/>
        <CustomInput inputType='phone' labelText='شماره تماس' placeholder='۰۹xxxxxxxxx' className='w-full'/>
        <CustomInput inputType='text' labelText='نام کاربری' placeholder='admin' className='w-full'/>
        <CustomInput inputType='password' labelText='رمز عبور' placeholder='xxxxxxxxxx' className='w-full'/>
        <button type='submit' className='bg-neutral-tertiary text-center text-gray-black text-2xl rounded-[55px] h-[46px] w-[150px] self-center'>تایید</button>
    </form>
  )
}

export default Register