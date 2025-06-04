import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { catergoryOrbrand } from '../../types'


export default function Brands() {
    function getAllBrands(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/brands')
    }
    const { data, isLoading } = useQuery({
        queryKey: ['getAllBrands'],
        queryFn: getAllBrands
    })
  return (
    <div className='p-4'>
      
<form className="mx-auto">
  <label htmlFor="underline_select" className="sr-only">Underline select</label>
  <select id="underline_select" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
                  <option selected>Choose a country</option>
                  {data?.data.data.map((ele: catergoryOrbrand) => (<option key={ele._id}>{ ele.name }</option>))}
  </select>
</form>

    </div>
  )
}
