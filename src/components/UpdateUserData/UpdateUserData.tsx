import { useForm } from "react-hook-form"
import { updateUserData } from "../../types"
import axios from "axios"
import { useContext, useState } from "react"
import { AuthenticationContext } from "../../context/AuthenticationContext"
import { useNavigate } from "react-router-dom"



export default function UpdateUserData() {
    const { token } = useContext(AuthenticationContext)
    const [isError,setIsError] = useState(false)
    const [isSucces, setIsSucces] = useState(false)
    const navigateToSignin = useNavigate()
    const { register, handleSubmit,formState: { errors } } = useForm<updateUserData>()
    function handleUpdateUserData(data : updateUserData) {
        axios.put('https://ecommerce.routemisr.com/api/v1/users/updateMe', data, {
            headers: {
                token
            }
        }).then(_ => {
            setIsSucces(true)
            localStorage.removeItem('token')
            setTimeout(() => {
                setIsSucces(false)
                navigateToSignin('/sign-in')
            }, 3000);
        }).catch(_ => {
            setIsError(true)
            setTimeout(() => {
                setIsError(false)
            }, 3000);
        })
    }
  return (
      <form onSubmit={handleSubmit(handleUpdateUserData)}>
          {isSucces && <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                  Data updated Successfluy
              </div>}
          {isError && <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
              E-mail already in use Change it
          </div>}
      <div className="mb-3" >
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input
                  {...register("name",
                      { required: 'required', pattern: { value:/^[A-Za-z0-9 ]{3,}$/,message:'the name must be 3 char or more' } })} type="text" 
                  id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              {errors.name && <p className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400">{ errors.name.message }</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="email"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input
                  {...register('email', {
                      required: 'required',
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'invalid email'
                      }
                  })}
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.email && <p className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400">{ errors.email.message }</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="phone"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
        <input
          {...register('phone', {
            required: 'required',
            pattern: { value: /^01[0125]\d{8}$/, message: 'put egyptian number' }
          })}
          type="tel"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {errors.phone && <p className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-red-400">{ errors.phone.message }</p>}
          </div>
          <button type="submit" className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {/* {isLouding ? <ThreeDots
                      visible={true}
                      height="30"
                      width="30"
                      color="#fff"
                      radius="5"
                      ariaLabel="three-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      /> : 'Submit'} */}
              Submit
            </button>
    </form>


  )
}
