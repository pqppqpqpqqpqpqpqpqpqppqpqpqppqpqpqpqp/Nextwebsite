import React from 'react'
import Link from 'next/link'
const Localstore = () => {
  return (
    <div>
      <div className="flex justify-center">
  <div className="block p-6 mt-16 rounded-lg shadow-lg bg-white max-w-sm">
  <img alt="ecommerce" className="w-612 h-612 m-auto" src="https://media.istockphoto.com/vectors/coming-soon-isolated-vector-icon-paper-style-promotion-sign-start-a-vector-id1273109788?k=20&m=1273109788&s=612x612&w=0&h=JStiZA3z_OG2FmCz5ZlV4axsxGWIy6-LrdOVTuZsyKg=" />
    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2 capitalize"></h5>
    <p className="text-gray-700 text-base mb-10 text-center">
        YOUR NEARBY LOCALSTORE COMINGSOON
    </p>
    <Link href={'/'}><a>
    <button type="button" className=" inline-block items-center text-center  px-10 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out capitalize">continue shopping</button>
   </a></Link>
  </div>
</div>


    </div>
  )
}

export default Localstore