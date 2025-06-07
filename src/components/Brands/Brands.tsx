import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { catergoryOrbrand } from '../../types'
import ProductsLoudingScreen from '../ProductsLoudingScreen/ProductsLoudingScreen'
import BrandProduct from '../BrandProduct/BrandProduct'


export default function Brands() {
    function getAllBrands(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
    }
    const { data,isLoading } = useQuery({
        queryKey: ['getAllBrands'],
        queryFn: getAllBrands
    })
  if (isLoading) {
    return <ProductsLoudingScreen count={5} />
  }
  return (
    <div className='grid md:grid-cols-3 lg:grid-cols-6 p-4 gap-8'>
      {data?.data.data.map((brand : catergoryOrbrand) => <BrandProduct key={brand._id} {...brand} />) }
    </div>
  )
}
