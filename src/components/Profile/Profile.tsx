import React, { useContext } from 'react'
import { AuthenticationContext } from '../../context/AuthenticationContext'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { userData } from '../../types'
import myimage from '../../assets/WhatsApp Image 2025-06-07 at 18.05.41_24cacda3.jpg'

export default function Profile() {
    const { token } = useContext(AuthenticationContext)
    function getUserData() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/auth/verifyToken', {
            headers: {
                token : token
            }
        })
    }
    const {data,isLoading} = useQuery({
        queryKey: ['getUserData'],
        queryFn:getUserData
    })
    if (isLoading) {
        return (
            <div role="status" className="animate-pulse">
  <div className=" w-fit mx-auto">
    <svg className="w-25 h-25 mx-auto text-gray-200 block  dark:text-gray-70" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
    </svg>
    <div className="w-35 h-2.5 my-4 bg-gray-200 rounded-full dark:bg-gray-700 me-3" />
    <div className="w-35 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700" />
    <div className="w-50 h-2.5 my-5 bg-gray-200 rounded-full dark:bg-gray-700" />
    <div className="w-50 h-2.5 bg-gray-200 rounded-full dark:bg-gray-700" />
  </div>
              <span className="sr-only">Loading...</span>
              
          </div>
        )
    }
    const userData : userData = data?.data.decoded
  return (
      <div className='p-4 w-1/2 mx-auto'>
          <img src={myimage} className='rounded-full mx-auto w-24 h-24 mb-4' alt="" />
          <h4 className='text-gray-900 mb-4 text-xl text-center mx-auto dark:text-white'><span className='text-blue-700 font-extrabold'>Name : </span>{userData.name}</h4>
          <h4 className='text-gray-900  mb-4 text-xl text-center dark:text-white'><span className='text-blue-700 font-extrabold'>Role : </span>{userData.role}</h4>
          <p className='text-gray-900 hover:text-blue-700 dark:text-white text-lg mb-4 cursor-pointer font-extrabold'>Update User Data</p>
          <p className='text-gray-900 hover:text-blue-700 dark:text-white text-lg mb-4 cursor-pointer font-extrabold'>Update Password</p>
    </div >
  )
}
