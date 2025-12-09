import React from 'react'

function ProductCard({ products }) {
  return (
    <div className='flex gap-4'>
      <div className='border border-gray-200 w-64 text-center flex flex-col justify-center items-center p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow'>
      <div className='mb-3'>
        <img 
          src={products?.images?.[0]} 
          className='h-48 w-48 object-cover hover:scale-105 transition-transform duration-300'
          alt={products?.title}
        />
      </div>

      <div className='hover:text-blue-500 cursor-pointer hover:underline mb-2 text-lg h-10 font-semibold'>
        <p className='font-medium'>{products?.title}</p>
      </div>

      <div className='text-yellow-500 font-semibold text-lg'>
        ₹{products?.price}
      </div>
    </div>
    </div>
  )
}

export default ProductCard