import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg 
    shadow-lg overflow-hidden w-[15rem] mx-3'>

      <div className='h-[13rem] w-[10rem]'>
        <img className='object-cover object-top w-full h-full' src='https://images.pexels.com/photos/3214768/pexels-photo-3214768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='' />
      </div>

      <div className='p-4'>
        <h3 className='text-lg font-medium text-gray-900'>
          Nofilter
        </h3>
        <p className='mt-2 text-sm text-gray-500'>Men Solid Pure Cotton straight kurta </p>
      </div>

    </div>
  )
}

export default HomeSectionCard