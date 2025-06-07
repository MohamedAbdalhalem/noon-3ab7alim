import { Link } from 'react-router-dom'
import { catergoryOrbrand } from '../../types'


export default function CategoryProduct(props : catergoryOrbrand) {
  return (
    <Link to={`/categories/${props._id}`} className='bg-white border group cursor-pointer border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'>
          <img src={props.image} className='rounded-t-lg h-50 w-full' alt={props.name} />
          <h4 className='text-center group-hover:text-blue-700 transition-all font-bold text-xl text-gray-900 dark:text-white'>{ props.name }</h4>
    </Link>
  )
}
