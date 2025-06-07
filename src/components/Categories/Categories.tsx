import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { catergoryOrbrand } from "../../types"
import ProductsLoudingScreen from "../ProductsLoudingScreen/ProductsLoudingScreen"
import CategoryProduct from "../CategoryProduct/CategoryProduct"



export default function Categories() {
  function getAllCategories() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/categories')
  }
  const {data,isLoading} = useQuery({
    queryKey: ['getAllCategories'],
    queryFn:getAllCategories
  })
  if (isLoading) {
    return <ProductsLoudingScreen count={5}/>
  }
  return (
    
<div className="p-4">
  
  <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-8'>
        {data?.data.data.map((category : catergoryOrbrand) => <CategoryProduct key={category._id} {...category} />) }
      </div>
      
</div>


  )
}
