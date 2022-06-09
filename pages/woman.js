import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Product from '../models/Product.js'
import mongoose from 'mongoose'
const Woman = ({products}) => {
  return (
    <div>
      <div>
  <Image src='/womanBanner.jpg' alt='' width={4000} height={1000}/>
  </div>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  
    <div className="flex flex-wrap -m-4 justify-center">
    {products.map((item) => {
       return <Link passHref={true} key={item._id} href={`/product/${item.slug}`}><div className="lg:w-1/5 md:w-1/2 p-4 w-full  cursor-pointer shadow-lg m-5 ">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto md:mx-0  block" src={item.img}/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Woman Tshirts</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
          <p className="mt-1">₹{item.price}</p>
          {/* <div className="mt-1">
           {products[item].size.includes('S') && <span className='border border-gray-300 px-1 mx-1'>S</span>}
           {products[item].size.includes('M') && <span className='border border-gray-300 px-1 mx-1'>M</span>} 
           {products[item].size.includes('L') && <span className='border border-gray-300 px-1 mx-1'>L</span> } 
           {products[item].size.includes('XL') && <span className='border border-gray-300 px-1 mx-1'>XL</span>} 
           {products[item].size.includes('XXL') && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
          </div> */}
          {/* <div className="mt-1">
            {products[item].color.includes('red') &&  <button className= "border-2  ml-1 bg-red-700 border-gray-600 rounded-full w-6 h-6 focus:outline-none "></button>}
            {products[item].color.includes('blue') &&  <button className= "border-2  ml-1 bg-blue-700 border-gray-600 rounded-full w-6 h-6 focus:outline-none "></button>}
            {products[item].color.includes('black') &&  <button className= "border-2  ml-1 bg-black-700 border-gray-600 rounded-full w-6 h-6 focus:outline-none "></button>}
            {products[item].color.includes('green') &&  <button className= "border-2  ml-1 bg-green-700 border-gray-600 rounded-full w-6 h-6 focus:outline-none "></button>}
            {products[item].color.includes('yellow') &&  <button className= "border-2  ml-1 bg-yellow-700 border-gray-600 rounded-full w-6 h-6 focus:outline-none "></button>}
            {products[item].color.includes('purple') &&  <button className= "border-2  ml-1 bg-purple-700 border-gray-600 rounded-full w-6 h-6 focus:outline-none "></button>}
            </div> */}
        </div>
      </div>
      </Link> })}
      
      
      
    </div>
  </div>
</section>




    </div>
  )
}

export async function getServerSideProps(context) {

  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)

}


  let products = await Product.find({ category: 'woman tshirt'})
  
    
 
  return {
    props: {products: JSON.parse(JSON.stringify(products))}, // will be passed to the page component as props
  }
}



export default Woman



