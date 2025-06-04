

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import Product from "../Product/Product"
import { product } from "../../types"
import Slider from "../Slider/Slider"
import ProductsLoudingScreen from "../ProductsLoudingScreen/ProductsLoudingScreen"

export default function Home() {
  function getAllProduct() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
  }
  const  {data,isLoading} = useQuery({
    queryKey: ['getAllProduct'],
    queryFn:getAllProduct
  })
  if (isLoading) {
    return <ProductsLoudingScreen count={5} />
  }
  
  return (
    <>
        <Slider/>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 p-4">
          {data?.data.data.map((pro: product) => (
            <Product key={pro._id} {...pro} />
          ))}
        </div>
    </>
  )
}
