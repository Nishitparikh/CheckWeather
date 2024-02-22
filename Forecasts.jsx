import React from 'react';

function Forecasts({title}) {
  return (
    <div>
    <div className='flex items-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>{title}</p>
    </div>
    <hr className='my-2' />
    <idv className="flex flex-row items-center justify-between text-white my-10">
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>04:30 PM</p>
            <img src='sun.png' className='w-12 my-2' alt='' />
            <p className='font-medium'>6</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>05:30 PM</p>
            <img src='sun.png' className='w-12 my-2' alt='' />
            <p className='font-medium'>6</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>06:30 PM</p>
            <img src='sun.png' className='w-12 my-2' alt='' />
            <p className='font-medium'>4</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>07:30 PM</p>
            <img src='sun.png' className='w-12 my-2' alt='' />
            <p className='font-medium'>4</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>08:30 PM</p>
            <img src='sun.png' className='w-12 my-2' alt='' />
            <p className='font-medium'>4</p>
        </div>
    </idv>
    </div>
  )
}

export default Forecasts