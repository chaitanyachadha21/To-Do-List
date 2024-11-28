import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-900 text-white p-4'>
      
      <div className="logo font-bold text-lg">iTask</div>

      <div className="todos flex gap-8 mx-5">

        <div className="todo cursor-pointer hover:font-bold transition-all duration-200">
            Home
        </div>
        <div className="todo cursor-pointer hover:font-bold transition-all duration-200">
            Services
        </div>

      </div>
    </nav>
  )
}

export default Navbar
