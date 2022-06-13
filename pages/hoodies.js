import React from 'react'
import Link from 'next/link'
import Product from '../models/Product.js'
import mongoose from 'mongoose'
import Image from 'next/image'

const Hoodies = ({products}) => {

  return (
    <div>


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
    {Object.keys(products).length === 0 && <div className="flex justify-center">
  <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 capitalize"></h5>
    <p className="text-gray-700 text-base mb-4">
       !SORRY NO HODDIES ARE AVAILABALE RIGHT NOW ITS COMINGSOON
    </p>
    <Link href={'/'}><a>
    <button type="button" className=" inline-block items-center text-center  px-10 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize">continue shopping</button>
   </a></Link>
  </div>
</div>}
     {Object.keys(products).map((item) => {

        return <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`}><div className="lg:w-1/5 md:w-1/2 p-4 w-full  cursor-pointer shadow-lg m-5 ">
        <a className="block relative  rounded overflow-hidden">
          <Image alt="ecommerce" className="m-auto md:mx-0 h-[30vh]  md:h-[36vh] block" src={products[item].img} width={500} height={500}/>
        </a>
        <div className="mt-4 text-center md:text-left">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{products[item].title}</h2>
          <p className="mt-1">₹{products[item].price}</p>
          <div className="mt-1">
           {products[item].size.includes('S') && <span className='border border-gray-300 px-1 mx-1'>S</span>}
           {products[item].size.includes('M') && <span className='border border-gray-300 px-1 mx-1'>M</span>} 
           {products[item].size.includes('L') && <span className='border border-gray-300 px-1 mx-1'>L</span> } 
           {products[item].size.includes('XL') && <span className='border border-gray-300 px-1 mx-1'>XL</span>} 
           {products[item].size.includes('XXL') && <span className='border border-gray-300 px-1 mx-1'>XXL</span>}
            </div>
            <div className="mt-1">
            {products[item].color.includes('red') &&  <button className= "border-2  ml-1 bg-red-700 border-gray-600 rounded-full w-6 h-6 focus:outline-none "></button>}
            {products[item].color.includes('blue') &&  <button className= "border-2  ml-1 bg-blue-700 border-gray-600 rounded-full w-6 h-6 focus:outline-none "></button>}
            {products[item].color.includes('black') &&  <button className= "border-2  ml-1 bg-black-700 border-gray-600 rounded-full w-6 h-6 focus:outline-none "></button>}
            {products[item].color.includes('green') &&  <button className= "border-2  ml-1 bg-green-700 border-gray-600 rounded-full w-6 h-6 focus:outline-none "></button>}
            {products[item].color.includes('yellow') &&  <button className= "border-2  ml-1 bg-yellow-700 border-gray-600 rounded-full w-6 h-6 focus:outline-none "></button>}
            {products[item].color.includes('purple') &&  <button className= "border-2  ml-1 bg-purple-700 border-gray-600 rounded-full w-6 h-6 focus:outline-none "></button>}
            </div>
        </div>
      </div>
      </Link>  })}
      
      
      
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


  let products = await Product.find({ category: 'hoodies'})
  let hoods = {}
  for(let item of products){
      if(item.title in hoods){
          if(! hoods[item.title].color.includes(item.color) && item.availableQty > 0 ) {
            hoods[item.title].color.push(item.color)
          }
          if(! hoods[item.title].size.includes(item.size) && item.availableQty > 0 ) {
            hoods[item.title].size.push(item.size)
          }
      }else{
         hoods[item.title] = JSON.parse(JSON.stringify(item))
         if(item.availableQty > 0) {
          hoods[item.title].color = [item.color]
          hoods[item.title].size = [item.size]
          
         }
      }
  }
    console.log(hoods)
 
  return {
    props: {products: JSON.parse(JSON.stringify(hoods))}, // will be passed to the page component as props
  }
}


export default Hoodies