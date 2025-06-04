import { useForm } from "react-hook-form"
import { signInform } from "../../types"
import axios from "axios"
import { useContext, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"
import { AuthenticationContext } from '../../context/AuthenticationContext';


export default function SignIn() {
  const [isInValid,setIsInValid] = useState<string | boolean>(false)
  const [isValid, setIsValid] = useState(false)
  const [isLouding, setIsLouding] = useState(false);
  const navigateHome = useNavigate()
  const {setToken} = useContext(AuthenticationContext);
  const { register, handleSubmit, formState: { errors } } = useForm<signInform>()
  function handleSignIn(user: signInform) {
    
    setIsLouding(true)
    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', user).
      then(data => {
        localStorage.setItem('token', data.data.token)
        setToken(data.data.token)
        setIsValid(true)
        setIsLouding(false)
        setTimeout(() => {
          setIsValid(false)
          navigateHome('/')
        },2000)
      }).
      catch(data => {
        setIsInValid(data.response.data.message)
        setIsLouding(false)
        setTimeout(() => {
          setIsInValid(false)
        },2000)
      })
  }

  return (
    <div className='py-10 px-2'>
      <form className="max-w-md mx-auto" onSubmit={handleSubmit(handleSignIn)}>
        <h2 className='text-center text-gray-900 dark:text-white text-4xl font-bold mb-4'> Sign-in Now</h2>
        {isInValid && <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
          {isInValid}
        </div>}
        {isValid &&<div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                  Welcome baby ....
              </div>} 
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
          <input type="email" id="email" {...register("email", { required: 'required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: 'invalied email' } })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          {errors.email && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert"> {errors.email.message} </div> }
  </div>

  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Password</label>
    <input type="password" id="password" {...register("password",
      { required: 'required', minLength: { value: 6, message: "minLength is 6" }, maxLength: { value: 12, message: 'maxLength is 12' } })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
          {errors.password && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400" role="alert"> {errors.password.message} </div> }
        </div>
        <Link to='/forget-password' className="font-bold text-blue-700 block hover:text-blue-800 transition-all mb-5 cursor-pointer">Forget Password</Link>
        <button type="submit" className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
