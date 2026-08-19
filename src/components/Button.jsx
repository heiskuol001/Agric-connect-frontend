import React from 'react'

const Button = ({buttonName}) => {
  return (
    <div>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>
        {buttonName}
      </button>
    </div>
  )
}

export default Button
