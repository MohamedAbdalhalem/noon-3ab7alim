import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom"
import Product from "../Product/Product"
import { product } from "../../types"
import ProductsLoudingScreen from "../ProductsLoudingScreen/ProductsLoudingScreen"
import img1 from '../../assets/original-2022966da1fc3718d3feddfdc471ae47-removebg-preview.png'


export default function Category_Products() {
  const { categoryId } = useParams()
  function getCategoryProducts() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${categoryId}`)
  }
  const {data,isLoading} =  useQuery({
    queryKey: ['getCategoryProducts', categoryId],
    queryFn:getCategoryProducts
  })
  
  if (isLoading) {
    return <ProductsLoudingScreen count={5} />
  }
  // no data found
  if (data?.data.data.length === 0) {
    return <img src={img1} className="mx-auto" alt="" />
  }
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 p-4">
      {data?.data.data.map((pro: product) => (
        <Product key={pro._id} {...pro} />
      ))}
            </div>
  )
}
