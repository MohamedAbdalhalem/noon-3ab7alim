import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { ThreeDots } from "react-loader-spinner"
import { Link } from "react-router-dom"

export default function Cart() {
  const { numOfCartItems, totalCartPrice, products,removeProductFromCart,clearUserCart, updateCartProductQuantity } = useContext(CartContext)
  const [productId, setProductId] = useState<string | null>(null)
  const [isDeleteLouding,setIsDeleteLouding] = useState(false )
  const [isClearLouding, setIsClearLouding] = useState(false)
  function handleUpdateProductQuantity(id : string ,count : number) {
    updateCartProductQuantity(id,count)
  }
  async function handleDeleteProduct(id: string) {
    setIsDeleteLouding(true)
    await removeProductFromCart(id)
    setProductId(null)
    setIsDeleteLouding(false)
  }
  async function handleClearCart() {
    setIsClearLouding(true)
    await clearUserCart()
    setIsClearLouding(false)
  }
  return (
    <div className='p-4'>
      <div className="flex justify-between items-center flex-wrap mb-4">
        <div >
        <p className="text-gray-900 font-bold dark:text-white mb-2">Price : { totalCartPrice }</p>
        <p className="text-gray-900 font-bold dark:text-white">Cart-Items : { numOfCartItems }</p>
        </div>
        <button onClick={handleClearCart} type="button" className="text-white cursor-pointer bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          {isClearLouding ? <ThreeDots
            visible={true}
            height="15"
            width="15"
            color="#fff"
            radius="5"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            /> : 'Clear'}
        </button>
      </div>
<div className="relative overflow-x-auto max-h-screen  shadow-md sm:rounded-lg">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-16 py-3">
          <span className="sr-only">Image</span>
        </th>
        <th scope="col" className="px-6 py-3">
          Product
        </th>
        <th scope="col" className="px-6 py-3">
          Qty
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
      {products?.map((ele)=>(<tr key={ele.product._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="p-4">
          <img src={ele.product.imageCover} className="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {ele.product.title.split(" ").slice(0,2).join(" ")}
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center">
            <button className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg onClick={()=> handleUpdateProductQuantity(ele.product._id,ele.count - 1)} className="w-3 h-3 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>
            <div>
              <p className='bg-gray-50 w-10 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-center'>{ ele.count }</p>
            </div>
            <button className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
              <span className="sr-only">Quantity button</span>
              <svg onClick={()=> handleUpdateProductQuantity(ele.product._id,ele.count + 1)} className="w-3 h-3 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>
        </td>
        <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {ele.price}
        </td>
        <td className="px-6 py-4">
          <p onClick={()=>{setProductId(ele.product._id)}} className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline">Remove</p>
        </td>
        {productId && <div id="popup-modal" className=" fixed top-1/2
      left-1/2   justify-center items-center w-full  h-[calc(100%-1rem)] max-h-full">
  <div className="relative p-4 w-full z-2 -translate-1/2  max-w-md max-h-full">
    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
      <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
        <svg onClick={()=>{setProductId(null)}} className="w-3 h-3 cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
        </svg>
        <span className="sr-only">Close modal</span>
      </button>
      <div className="p-4 md:p-5 text-center">
        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
        <button onClick={()=>{handleDeleteProduct(productId)}}  data-modal-hide="popup-modal" type="button" className="text-white cursor-pointer bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
          {isDeleteLouding ? <ThreeDots
            visible={true}
            height="15"
            width="15"
            color="#fff"
            radius="5"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            /> : "Yes, I'm sure"}
        </button>
        <button onClick={()=>{setProductId(null)}} data-modal-hide="popup-modal" type="button" className="py-2.5 cursor-pointer px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
      </div>
    </div>
  </div>
</div>}

      </tr>))}
      
    </tbody>
        </table>  
      </div>
      <Link to='/payment'><button type="button" className="text-white cursor-pointer mt-4 w-full font-bold  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Order Now</button></Link>
    </div>
  )
}

