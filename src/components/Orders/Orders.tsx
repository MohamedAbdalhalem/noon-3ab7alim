import { useContext } from "react"
import { AuthenticationContext } from "../../context/AuthenticationContext"
import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import Order_Desgin from "../Order_Desgin/Order_Desgin"
import { orderDetails } from "../../types"
import ProductsLoudingScreen from "../ProductsLoudingScreen/ProductsLoudingScreen"

export default function Orders() {
  const { userId } = useContext(AuthenticationContext)
  function getOrders() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`)
  }
  const{data,isLoading} =  useQuery({
    queryKey: ['getOrders'],
    queryFn: getOrders
  })
  if (isLoading) {
    return <ProductsLoudingScreen count={5}/>
  }
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-4'>
      {data?.data.map((order: orderDetails) => <Order_Desgin {...order} />)}    
    </div>
  )
}
