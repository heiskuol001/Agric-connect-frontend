// import React from 'react'
// import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-16 bg-slate-100 flex items-center justify-between px-10 shadow-md'>
      <div>
        <h1 className='text-xl font-bold text-green-600'>AgricConnect</h1>
      </div>
      <div>
        <ul className='hidden md:flex gap-4'>
          <li><Link to='/' className='font-medium text-gray-700 hover:text-green-600 cursor-pointer'>Home</Link></li>
          <li><Link to='/about' className='font-medium text-gray-700 hover:text-green-600 cursor-pointer'>About</Link></li>
          <li><Link to='/blog' className='font-medium text-gray-700 hover:text-green-600 cursor-pointer'>Blog</Link></li>
        </ul>
      </div>
      <div>
        <Link to='/login'>
        <button className='border rounded-sm px-2 py-0.5 cursor-pointer hover:bg-green-600 hover:text-white font-semibold'>Sign up</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
