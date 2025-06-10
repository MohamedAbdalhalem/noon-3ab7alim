import  { createContext, useContext, useEffect, useState } from 'react'
import { cartContext, contextProviderProps, productCart } from '../types'
import axios from 'axios'
import { AuthenticationContext } from './AuthenticationContext'
import { toast } from 'react-toastify'
const defaultValue: cartContext = {
  addProducToCart: () => { },
  numOfCartItems: 0,
  totalCartPrice: 0,
  products: null,
  removeProductFromCart: () => { },
  clearUserCart: () => { },
  updateCartProductQuantity: () => { },
  cartId: null,
  clearStates: ()=>{}
}
export const CartContext = createContext<cartContext>(defaultValue)

export default function CartContextProvider({ children }: contextProviderProps) {
  const { token } = useContext(AuthenticationContext)
  const [numOfCartItems,setnumOfCartItems] = useState(0)
  const [totalCartPrice, settotalCartPrice] = useState(0)
  const [cartId,setCartId] = useState<string | null>(null)
  const [products, setProducts] = useState<productCart[] | null>(null)
  function addProducToCart(productId : string | undefined) {
    axios.post('https://ecommerce.routemisr.com/api/v1/cart', {
      productId
    }, {
      headers: {
        token
      }
    })
      .then(_ => {
        getUserCart()
        toast.success('product add successfully', { position: 'top-right', autoClose: 2000, pauseOnHover: false, pauseOnFocusLoss: false, style: {width:'250px'}})
      })
      .catch(_ => {
        toast.error('error',{position:'top-right',autoClose: 2000,pauseOnHover:false,pauseOnFocusLoss:false,style: {width:'250px'}})
    })
  }
  async function removeProductFromCart(productId : string) {
    await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      headers: {
        token,
      }
    })
      .then(data => {
      setnumOfCartItems(data.data.numOfCartItems)
      settotalCartPrice(data.data.data.totalCartPrice)
      setProducts(data.data.data.products)
    })
    .catch(_ => {
      console.log("error")
    })
  }
  function getUserCart() {
    axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
      headers: {
        token,
      }
    })
      .then(data => {
        setCartId(data.data.cartId)
      setnumOfCartItems(data.data.numOfCartItems)
        settotalCartPrice(data.data.data.totalCartPrice)
        setProducts(data.data.data.products)
      })
      .catch(err => {
      console.log(err)
    })
  }
  async function clearUserCart() {
    await axios.delete('https://ecommerce.routemisr.com/api/v1/cart', {
      headers: {
        token
      }
    })
      .then(_ => {
        setnumOfCartItems(0)
        settotalCartPrice(0)
        setProducts(null)
      })
  }
  function updateCartProductQuantity(productId : string,count : number) {
    axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
      count 
    }, {
      headers: {
        token
      }
    }).then(data => {
      setnumOfCartItems(data.data.numOfCartItems)
      settotalCartPrice(data.data.data.totalCartPrice)
      setProducts(data.data.data.products)
    })
  }
  function clearStates() {
    setnumOfCartItems(0)
    settotalCartPrice(0)
    setProducts(null)
  }
  useEffect(() => {
    if (token)
      getUserCart()
  },[token])
  return (
    <CartContext.Provider value={{
      addProducToCart,
      numOfCartItems,
      totalCartPrice,
      products,
      removeProductFromCart,
      clearUserCart,
      updateCartProductQuantity,
      cartId,
      clearStates
    }}>
      {children}
    </CartContext.Provider>
  )
}
