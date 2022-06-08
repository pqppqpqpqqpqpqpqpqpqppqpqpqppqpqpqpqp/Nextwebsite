import React from 'react'

const Order = () => {
  return (
    <div>


<section className="text-gray-600 body-font overflow-hidden">

  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">FLORA</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Order Id: #897756</h1>
        <p className="leading-relaxed mb-4">Your order has been placed</p>
       
        <div className="flex mb-4">
          <a className="flex-grow text-center py-2 text-lg px-1"> Item Desc</a>
          <a className="flex-grow text-center border-gray-300 py-2 text-lg px-1">Quantity</a>
          <a className="flex-grow text-center border-gray-300 py-2 text-lg px-1">Item Total</a>
        </div>
    
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Premium Tshirt (XL/RED)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">470</span>
        </div>
        <div className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">Premium Tshirt (XL/RED)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">470</span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
        <span className="text-gray-500">Premium Tshirt (XL/RED)</span>
          <span className="ml-auto text-gray-900">1</span>
          <span className="ml-auto text-gray-900">470</span>
        </div>
        <div className="flex flex-col">
          <span className="title-font font-medium text-2xl text-gray-900">Subtotal: ₹470</span>
          <div className='my-2'>

          <button className="flex mx-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
          </div>
          
        </div>
      </div>
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-10 object-cover object-top rounded" src="https://www.redwolf.in/image/cache/catalog/mugs/the-marauders-map-coffee-mug-india-438x438.jpg"/>
    </div>
  </div>
</section>


    </div>
  )
}

export default Order