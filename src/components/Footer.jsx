import React from 'react'

function Footer() {
    return (
        <div className='absolute bottom-0 left-0 right-0 bg-green-500 pt-5 dark:bg-gray-600 text-white dark:text-gray-300'>
            <div className='flex flex-row justify-around align-middle py-3'>
                <div className='flex flex-col list-none'>
                    <h2>Quick Links</h2>
                    <li><a href="!">aaa</a></li>
                    <li><a href="!">bbb</a></li>
                    <li><a href="!">aaa</a></li>
                    <li><a href="!">bbb</a></li>
                    <li><a href="!">aaa</a></li>
                    <li><a href="!">bbb</a></li>
                </div>
                <div className='flex flex-col w-1/3 text-xs md:text-sm lg:text-lg'>
                    <p className='md:text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ducimus, fugit eligendi blanditiis obcaecati cupiditate quisquam minima. Iure adipisci, voluptatem eligendi, dolorum vero aliquid, amet reprehenderit ut totam ratione dolore voluptates? Sed ea laborum facilis nostrum maxime illum non fuga?</p>
                    <div className='flex flex-col pt-6 gap-y-3'>
                        <a href="!">New Registration</a>
                        <a href="!">Report a bug</a>
                    </div>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>phone</p>
                    <p>email</p>
                    <p>address</p>
                </div>
            </div>
            <hr className='' />
            <div className='py-3'>
                <p>© SAM NIJIN</p>
            </div>
        </div>
    )
}

export default Footer