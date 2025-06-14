import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import SignUp from "./components/SignUp/SignUp"
import Home from "./components/Home/Home"
import SignIn from "./components/SignIn/SignIn"
import NotFound from "./components/NotFound/NotFound"
import ForgetPassword from "./components/ForgetPassword/ForgetPassword"
import VerifyCode from './components/VerifyCode/VerifyCode';
import ResetPassword from "./components/ResetPassword/ResetPassword"
import AuthenticationContextProvider from "./context/AuthenticationContext"
import Categories from "./components/Categories/Categories"
import UnAuthRoute from "./components/UnAuthRoute/UnAuthRoute"
import AuthRoute from "./components/AuthRoute/AuthRoute"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Brands from "./components/Brands/Brands"
import ProductDeltials from "./components/ProductDeltials/ProductDeltials"
import Category_Products from "./components/Category_Products/Category_Products"
import Brand_Products from "./components/Brand_Products/Brand_Products"
import Profile from "./components/Profile/Profile"
import CartContextProvider from "./context/CartContext"
import { ToastContainer } from "react-toastify"
import Cart from "./components/Cart/Cart"
import Wishlist from "./components/Wishlist/Wishlist"
import WishlistContextProvider from "./context/WishlistContext"
import UpdateUserData from "./components/UpdateUserData/UpdateUserData"
import Orders from "./components/Orders/Orders"
import Payment from "./components/Payment/Payment"



const router = createBrowserRouter([
  {
    path:'', element: <Layout />, children: [
      { path: '', element: <AuthRoute><Home /></AuthRoute> },
      { path: 'categories', element: <AuthRoute><Categories /></AuthRoute> },
      { path: 'brands', element: <AuthRoute><Brands /></AuthRoute> },
      { path: 'product-detial/:productId', element: <AuthRoute><ProductDeltials /></AuthRoute> },
      {path:'categories/:categoryId',element:<AuthRoute><Category_Products /></AuthRoute>},
      { path: 'brands/:brandId', element: <AuthRoute><Brand_Products /></AuthRoute> },
      { path: 'wishlist',element: <AuthRoute><Wishlist/></AuthRoute>},
      { path: 'cart', element: <AuthRoute><Cart /></AuthRoute> },
      { path: 'allorders', element: <AuthRoute><Orders /></AuthRoute> },
      {path: 'payment', element:<AuthRoute><Payment/></AuthRoute>},
      {
        path: 'profile', element: <AuthRoute><Profile /></AuthRoute>, children: [
        {path:'update-user-data', element:<AuthRoute><UpdateUserData/></AuthRoute>},
      ]},
      {path:'sign-up',element:<UnAuthRoute><SignUp/></UnAuthRoute>},
      { path: 'sign-in', element: <UnAuthRoute><SignIn /></UnAuthRoute> },
      { path: 'forget-password', element: <UnAuthRoute><ForgetPassword /></UnAuthRoute> },
      { path: 'verify-code', element: <UnAuthRoute><VerifyCode /></UnAuthRoute> },
      {path:'reset-password',element:<UnAuthRoute><ResetPassword/></UnAuthRoute>},
      {path:'*',element:<AuthRoute><NotFound/></AuthRoute> }
    ]}
])
const client = new QueryClient()
export default function App() {
  
  
  return (
    <div>
      <QueryClientProvider client={client}>
        <AuthenticationContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <RouterProvider router={router} />
            </WishlistContextProvider>
          </CartContextProvider>
        </AuthenticationContextProvider>
      </QueryClientProvider>
      <ToastContainer />
    </div>
  )
}
