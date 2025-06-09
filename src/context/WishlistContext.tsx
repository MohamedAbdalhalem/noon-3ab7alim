import { createContext, useContext, useEffect, useState } from 'react'
import { contextProviderProps, product, wishlistContext } from '../types'
import axios from 'axios'
import { AuthenticationContext } from './AuthenticationContext'
import { toast } from 'react-toastify'
const defaultValue: wishlistContext = {
    getUserWishCart: () => { },
    products: null,
    addProductToWishlist : () =>{},
    removeProductFromWishlist : () =>{}
}
export const WishlistContext = createContext<wishlistContext>(defaultValue)
export default function WishlistContextProvider({ children }: contextProviderProps) {
    const { token } = useContext(AuthenticationContext)
    const [products,setProducts] = useState<product[] | null>(null)
    function getUserWishCart() {
        axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
            headers: {
                token
            }
        }).then(data => {
            setProducts(data.data.data)
        }).catch(err => {
            console.log(err)
        })
    }
    function addProductToWishlist(productId : string | undefined) {
        axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
            productId
        }, {
            headers: {
                token
            }
        }).then(_ => {
            getUserWishCart()
            toast.success('product added to wishlist',{ position: 'top-right', autoClose: 2000, pauseOnHover: false, pauseOnFocusLoss: false, style: {width:'250px'}})
        }
        ).catch(_ => {
            toast.error('Error',{ position: 'top-right', autoClose: 2000, pauseOnHover: false, pauseOnFocusLoss: false, style: {width:'250px'}})
        })
    }
    function removeProductFromWishlist(productId: string | undefined) {
        axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
            headers: {
                token
            }
        }).then(_ => {
            getUserWishCart()
            toast.success('product removed to wishlist',{ position: 'top-right', autoClose: 2000, pauseOnHover: false, pauseOnFocusLoss: false, style: {width:'250px'}})
        })
            .catch(_ => {
            toast.error('Error',{ position: 'top-right', autoClose: 2000, pauseOnHover: false, pauseOnFocusLoss: false, style: {width:'250px'}})
        })
    }
    useEffect(() => {
        if(token)
        getUserWishCart()
    },[token])
  return (
      <WishlistContext.Provider value={{
          getUserWishCart,
          products,
          addProductToWishlist,
          removeProductFromWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  )
}
