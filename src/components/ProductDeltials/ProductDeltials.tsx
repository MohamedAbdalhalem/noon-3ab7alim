import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import { productDelials } from '../../types';
import  StarRatings  from 'react-star-ratings';
import Slider from 'react-slick';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';


export default function ProductDeltials() {
  const { addProducToCart } = useContext(CartContext)
    const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const { productId } = useParams()
  function handleAddToProduct() {
    addProducToCart(productId)
  }
    function getProductDetials() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`)
    }
    const { data,isLoading } = useQuery({
        queryKey: ['getProductDetials', productId],
        queryFn: getProductDetials
    })
    const productDetials : productDelials = data?.data.data
    if (isLoading) {
        return (
            <div className='p-4'>
    <div role="status" className="border  border-gray-200 dark:border-gray-700 rounded-lg shadow-sm space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
      <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded-sm  dark:bg-gray-700">
        <svg className="w-10 h-full text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
      <div className="w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5" />
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
</div>
        )
    }
    
    return (
    <div className='p-4 product-detials'>
    <div  className="grid grid-cols-1 items-center lg:grid-cols-3 gap-5 bg-white border border-gray-200 rounded-lg shadow-sm  dark:border-gray-700 dark:bg-gray-800 ">
      <div className="">
      <Slider {...settings} className='product-detials-slider h-full'>
                        {productDetials.images.map((img :string ) => <div>
            <img src={img} className='rounded-tl-lg max-h-[600px] w-full' alt="" />
        </div>)}
      </Slider>
    </div>
      <div className="lg:col-span-2 p-2">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ productDetials.title }</h5>
                    <p className="mb-3 font-normal text-gray-900 dark:text-white">
                        <span className='text-blue-700 font-black'>Sold : </span>
                        {productDetials.sold}
                    </p>
                                        
                    <p className="mb-3 font-normal text-gray-900 dark:text-white">
                        <span className='text-blue-700 font-bold'>Quantity : </span>
                        {productDetials.quantity}
                    </p>
                                        
                    <p className="mb-3 font-normal text-gray-900 dark:text-white">
                        <span className='text-blue-700 font-black'>Category : </span>
                        {productDetials.category.name}
                    </p>
                    <p className="mb-3 font-normal text-gray-900 dark:text-white">
                        <span className='text-blue-700 font-black'>Brand : </span>
                        {productDetials.brand.name}
                    </p>
                    <p className="mb-3 font-normal text-gray-900 dark:text-white">
                        <span className='text-blue-700 font-black'>Description : </span>
                        {productDetials.description}
                    </p>
                    <div className='flex items-center flex-wrap justify-between'>
                        <p className='flex items-end' ><StarRatings
                          rating={productDetials.ratingsAverage}
                          starRatedColor="gold"
                          numberOfStars={5}
                          name='rating'
                          starDimension="24px"
                          starSpacing="2px"
                        /><span className='text-gray-900 ms-2 dark:text-white'>{ productDetials.ratingsAverage }</span></p>
                        <div>
                            {productDetials.ratingsAverage ? <div>
          <span className="text-2xl mr-2 font-bold text-red-700 line-through">{ productDetials.priceAfterDiscount }</span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">{ productDetials.price }$</span>
        </div> : 
          <p className="text-2xl font-bold text-gray-900 dark:text-white">{ '$'+ productDetials.price }$</p>}
                        </div>
                        
                    </div>
                    <button onClick={handleAddToProduct} className="text-white mt-3 cursor-pointer w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><i className='fa-solid fa-plus me-3'></i>Add to cart</button>
        
                    <button className="text-white mt-3 cursor-pointer w-full bg-cyan-800 hover:bg-cyan-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-700 dark:focus:ring-cyan-900"><i className='fa-solid fa-heart me-3'></i>Add to cart</button>
                    
      </div>
    </div>
</div>    
  )
}
{/*  */}