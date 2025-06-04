import { useForm } from 'react-hook-form'
import { email } from '../../types'
import axios from 'axios'
import { ThreeDots } from 'react-loader-spinner'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
    const [isLouding, setIsLouding] = useState(false);
    const [isError, setIsError] = useState<string | boolean>(false)
    const navigateVerifyCode = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<email>()
    function forgetpassword(email: email) {
        setIsLouding(true)
        axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', email).then(_ => {
            setIsLouding(false)
            navigateVerifyCode('/verify-code')
        })
            .catch(data => {
                setIsLouding(false) 
                setIsError(data.response.data.message)
                setTimeout(() => {
                    setIsError(false)
                },2000)
        })
    }
  return (
    <div className='py-10 px-2'>
          <form className="max-w-md mx-auto" onSubmit={handleSubmit(forgetpassword)}> 
              <h2 className='text-center dark:text-white text-gray-900 text-3xl font-bold mb-4'>Send Your Email</h2>
        {isError && <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          {isError}
        </div>}
  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="email" {...register("email", { required: 'required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'invalied email' } })} aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {errors.email && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert"> {errors.email.message} </div>}
              <button type="submit" className="text-white mt-5 cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {isLouding ? <ThreeDots
                          visible={true}
                          height="30"
                          width="30"
                          color="#fff"
                          radius="5"
                          ariaLabel="three-dots-loading"
                          wrapperStyle={{}}
                          wrapperClass=""
                          /> : 'Submit'}
                </button>
</form>


    </div>
  )
}
