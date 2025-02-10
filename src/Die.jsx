import React from 'react'

const Die = ({ value }) => {
  return (
    <button className='w-[50px] h-[50px] rounded-lg shadow-lg bg-white font-bold text-xl cursor-pointer'>{value}</button>
)
}
export default Die
