import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarToggle,
  Dropdown,
  DropdownItem,
  DropdownDivider,
} from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/AuthenticationContext";
import { CartContext } from "../../context/CartContext";

export function Nav() {
  const [isDrak, setIsDark] = useState("Light-mode");
  const { token, setToken } = useContext(AuthenticationContext);
  const { numOfCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/sign-in");
  };

  const handleDarkLightMode = () => {
    if (localStorage.getItem("mode") === "Dark-mode") {
      localStorage.setItem("mode", "Light-mode");
      document.documentElement.classList.remove("dark");
      setIsDark("Light-mode");
    } else {
      localStorage.setItem("mode", "Dark-mode");
      document.documentElement.classList.add("dark");
      setIsDark("Dark-mode");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("mode") === "Dark-mode") {
      document.documentElement.classList.add("dark");
      setIsDark("Dark-mode");
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark("Light-mode");
    }
  }, []);

  return (
    <Navbar className="rounded-none shadow-md dark:bg-gray-900" fluid>
      <Link to="/">
        <NavbarBrand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-blue-700">
            Noon 3ab7alim
          </span>
        </NavbarBrand>
      </Link>

      <div className="flex md:order-2  items-center gap-2">
        <Dropdown label={<span className="text-gray-900 cursor-pointer dark:text-white">Settings</span>} inline>
          {token ? (
            <>
              <DropdownItem  as={NavLink} to="/profile">Profile</DropdownItem>
              <DropdownItem onClick={handleLogout}>Log-out</DropdownItem>
            </>
          ) : (
            <>
              <DropdownItem as={NavLink} to="/sign-in">Sign-in</DropdownItem>
              <DropdownItem as={NavLink} to="/sign-up">Sign-up</DropdownItem>
            </>
          )}
          <DropdownDivider />
          <DropdownItem onClick={handleDarkLightMode}>{isDrak}</DropdownItem>
        </Dropdown>

        {/* Cart */}
        {token && (
          <p className="relative mr-2">
            <NavLink to='/cart' className="fa-solid fa-cart-shopping text-lg text-gray-900 dark:text-white">
            </NavLink>
            {numOfCartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
                {numOfCartItems}
              </span>
            )}
          </p>
        )}

        
      </div>
      {token && <>
        <NavbarToggle />
        <NavbarCollapse>
          <NavLink to='/' className='text-gray-900 mb-2 md:mb-0  dark:text-white font-bold  '>Home</NavLink>
          <NavLink to='/categories' className='text-gray-900 mb-2 md:mb-0  dark:text-white font-bold'>Categories</NavLink>
          <NavLink to='/brands' className='text-gray-900 mb-2 md:mb-0  dark:text-white font-bold'>Brands</NavLink>
          <NavLink to='/wishlist' className='text-gray-900 mb-2 md:mb-0  dark:text-white font-bold'>Wishlist</NavLink>
          <NavLink to='/allorders' className='text-gray-900 mb-2 md:mb-0  dark:text-white font-bold'>Allorders</NavLink>
      </NavbarCollapse>
      </>
        }
      
    </Navbar>
  );
}
