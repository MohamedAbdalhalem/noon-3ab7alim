import { useContext, useEffect, useState } from "react";
import {  Link, NavLink, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthenticationContext";

export default function Navbar() {
  const [isDrak, setIsDark] = useState('Light-mode')
  function handleDarkLightMode() {
    
    if (localStorage.getItem('mode') === 'Dark-mode') {
      localStorage.setItem('mode','Light-mode')
      document.documentElement.classList.remove('dark')
      setIsDark('Light-mode')
    } else {
      localStorage.setItem('mode','Dark-mode')
      document.documentElement.classList.add('dark')
      setIsDark('Dark-mode')
    }
  }
  useEffect(() => {
    handleDarkLightMode()
  },[])
  const { token, setToken } = useContext(AuthenticationContext)
  const navigatToSignIn = useNavigate()
  function handleLogout() {
    setToken(null)
    localStorage.removeItem('token')
    navigatToSignIn ('/sign-in')
  }
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-lg">
  <div className="flex flex-wrap items-center justify-between mx-auto p-4">
    <Link  to='' className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="font-bold text-blue-700 text-2xl">Noon 3ab7alim</span>
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col md:items-center p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        {token && <>
                <li>
          <NavLink to='' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</NavLink>
        </li>
        <li>
          <NavLink to='/categories' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Categories</NavLink>
        </li>
        <li>
          <NavLink to='/brands' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Brands</NavLink>
                </li>
                <li>
          <NavLink to='/wishlist' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">WishList</NavLink>
              </li>
              <li>
          <NavLink to='/orders' className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">orders</NavLink>
              </li>
        <li>
                
                  <div className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <button type="button" className="relative inline-flex items-center  text-sm font-medium text-center text-white  rounded-lg ">
                      <NavLink  to='/cart' className="fa-solid fa-cart-shopping text-gray-900 text-lg dark:text-white"></NavLink>
                      <div className="absolute  inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">20</div>
                    </button>
                  </div>
        </li>
              </>}      
        
        
        
{/* drop down meun */}
 <li>            
<div>
  <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-3 py-1.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Settings<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
    </svg>
  </button>
  {/* Dropdown menu */}
  <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44  dark:bg-gray-700">
      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      {token ? <><li>
        <NavLink to='/profile' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</NavLink>
                      </li>
                        <li>
        <span onClick={handleLogout} className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log-out</span>
      </li>
                      </> : <>
                          <li>
        <NavLink to='/sign-in' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign-in</NavLink>
      </li>
      <li>
        <NavLink to='/sign-up' className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign-up</NavLink>
      </li>
                      </>
      }
      <li>
                        <span onClick={handleDarkLightMode} className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{ isDrak }</span>
      </li>
      
      
    </ul>
  </div>
</div>

    
          </li>
      </ul>
    </div>
  </div>
      </nav>
    </div>
  )
}
