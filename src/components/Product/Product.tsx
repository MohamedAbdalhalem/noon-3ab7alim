import StarRatings from 'react-star-ratings';
import { product } from '../../types';
import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { WishlistContext } from '../../context/WishlistContext';


export default function Product(props: product) {
  const { addProducToCart } = useContext(CartContext)
  const {products,addProductToWishlist,removeProductFromWishlist} = useContext(WishlistContext)
  function handleAddToProduct(e: React.MouseEvent) {
    e.preventDefault()
    addProducToCart(props._id)
  }
  function handleAddToWishlist(e: React.MouseEvent) {
     e.preventDefault()
    addProductToWishlist(props._id)
  }
  
  function handleRemoveFromWishlist(e: React.MouseEvent) {
     e.preventDefault()
    removeProductFromWishlist(props._id)
  }
  return (
    <Link to={`/product-detial/` + props._id} className=" bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <img className="w-full rounded-t-lg mb-3" src={props.imageCover} alt="product image" />
          <div className="px-4  pb-5">
              <h3 className='text-2xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white'>{ props.title.split(" ").slice(0,2).join(' ') }</h3>
              <h5 className="text-lg text-blue-600 font-semibold">{ props.brand.name}</h5>
    <div className="flex items-center mt-2.5 mb-3">
      <div className="flex items-center space-x-1 rtl:space-x-reverse">
        <StarRatings
  rating={props.ratingsAverage}
  starRatedColor="gold"
  numberOfStars={5}
  name='rating'
  starDimension="24px"
  starSpacing="2px"
            />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">{props.ratingsAverage }</span>
      </div>
                  
        </div>
        {props.priceAfterDiscount ? <div>
          <span className="text-2xl font-bold text-red-700 line-through">{ props.price }</span>
          <span className="text-2xl font-bold text-gray-900 ms-2 dark:text-white">{ props.priceAfterDiscount}$</span>
        </div> : 
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{props.price }$</p>}
        <button onClick={(e) => handleAddToProduct(e)} className="text-white mt-3 cursor-pointer w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className='fa-solid fa-plus me-3'></i>Add to cart</button>

        <button onClick={products?.some((ele)=> ele._id === props._id) ? (e)=> handleRemoveFromWishlist(e) : (e)=> handleAddToWishlist(e)} className="text-white mt-3 cursor-pointer w-full bg-cyan-800 hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-700 dark:focus:ring-cyan-900">
          {products?.some((ele)=> ele._id === props._id)? <><i className='fa-solid fa-heart me-3 text-red-700'></i>Remove from Wishlist</>  : <><i className='fa-solid fa-heart me-3'></i>Add to wishlist</> }
        </button>

      </div>
          </Link>
  )
}
