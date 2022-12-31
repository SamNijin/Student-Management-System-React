import React from 'react'

function Header() {
    return (
        <div className='flex justify-around  py-5 md:py-8 bg-green-500 text-white dark:bg-gray-700 dark:text'>
            <div>
                <h1>Logo</h1>
            </div>
            <div className='flex gap-x-4 text-sm md:text-lg lg:text-xl md:gap-x-10'>
                <div>
                    <a href="!" className='hover:text-red-400 transition-all duration-300'>Home</a>
                </div>
                <div>
                    <a href="!" className='hover:text-red-400 transition-all duration-300'>Student</a>
                </div>
                <div>
                    <a href="!" className='hover:text-red-400 transition-all duration-300'>Report</a>
                </div>
                <div>
                    <a href="!" className='hover:text-red-400 transition-all duration-300'>Login</a>
                </div>
            </div>
        </div>
    )
}

export default Header