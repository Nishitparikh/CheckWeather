import React from 'react'
import{
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
}from "@iconscout/react-unicons";

function Temperatures() {
  return (
    <div>
    <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
        <p> clear </p>
    </div>
    <div className='flex flex-row items-center justify-between text-white py-3'>
        <img src="sun.png" alt="Sun" className='w-20' />
        <p className='text-5xl'>7</p>
        <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature size={18} className="mr-1" />
                Feels like:
                <span className='font-medium ml-1'>32</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTear size={18} className="mr-1" />
                Humidity:
                <span className='font-medium ml-1'>12%</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilWind size={18} className="mr-1" />
                Wind:
                <span className='font-medium ml-1'>20km/h</span>
            </div>
        </div>
    </div>
    <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
        <UilSun/>
        <p className='font-light'>Rise:<span className='font-medium ml-1'>07:00 AM</span></p>
        <p className='font-light'> | </p>
        <UilSunset/>
        <p className='font-light'>Set:<span className='font-medium ml-1'>05:30 PM</span></p>
        <p className='font-light'> | </p>
        <UilTemperature/>
        <p className='font-light'>High:<span className='font-medium ml-1'>10</span></p>
        <p className='font-light'> | </p>
        <UilTemperature/>
        <p className='font-light'>Low:<span className='font-medium ml-1'>2</span></p>
        <p className='font-light'> | </p>
    </div>
    </div>
  )
}

export default Temperatures