import { useContext } from "react"
import { WishlistContext } from "../../context/WishlistContext"
import Product from "../Product/Product"
import { product } from "../../types"
import img1 from '../../assets/original-2022966da1fc3718d3feddfdc471ae47-removebg-preview.png'
import ProductsLoudingScreen from "../ProductsLoudingScreen/ProductsLoudingScreen"

export default function Wishlist() {
  const { products } = useContext(WishlistContext)
  if (products === null) {
    return <ProductsLoudingScreen count={5} />
  }
  return (
    <>
      {products.length ? (
        <div className="grid md:grid-cols-3 lg:grid-cols-5   gap-8">
          {products?.map((pro: product) => (
            <Product key={pro._id} {...pro} />
          ))}
        </div>
      ) : (
        <img src={img1} className="mx-auto" alt="" />
      )}
    </>
  )
}
