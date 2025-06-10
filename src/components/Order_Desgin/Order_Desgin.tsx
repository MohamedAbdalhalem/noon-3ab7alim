
import { orderDetails } from '../../types'

export default function Order_Desgin(props: orderDetails) {
  const orderDetails = props
  return (
    <div className="text-gray-800  dark:bg-gray-900 hover:bg-gray-100  hover:dark:bg-gray-800 rounded-2xl shadow-md p-6 border border-gray-200 dark:text-white dark:border-gray-700">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Order Details</h2>
      </div>
      <div className="space-y-2 text-sm text-gray-700 dark:text-white">
        <div><span className="font-semibold">Name:</span> { orderDetails.user.name }</div>
        <div><span className="font-semibold">Email:</span> { orderDetails.user.email }</div>
        <div><span className="font-semibold">Phone:</span> { orderDetails.user.phone }</div>
        <div><span className="font-semibold">City:</span> { orderDetails.shippingAddress.city }</div>
        <div><span className="font-semibold">Details:</span> { orderDetails.shippingAddress.details }</div>
        <div><span className="font-semibold">Total Price:</span> EGP { orderDetails.totalOrderPrice }</div>
        <div><span className="font-semibold">Payment  Type:</span> { orderDetails.paymentMethodType }</div>
      </div>
      </div>
  )
}
