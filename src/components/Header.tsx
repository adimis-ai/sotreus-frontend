import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="navbar">
            <div className="flex-1">
                <a href="/" className="btn btn-ghost normal-case text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 text-2xl md:text-3xl">Sorteus</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <div className='flex space-x-2'>
                        <li><a href='/dashboard' className='border text-blue-200 border-blue hover:bg-blue-300 hover:border-black hover:text-black font-bold'>Dashboard</a></li>
                        <li><a href='/server' className='font-bold border border-black bg-blue-300 text-black hover:bg-black hover:border-blue-300 hover:text-blue-200'>Server</a></li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
