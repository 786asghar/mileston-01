import React from 'react'
import Link from 'next/link'

function Header() {
  return (
    
    
    
    <div className='flex justify-between bg-black '>
     <div className=" flex justify-start text-white text-8xl text-bold py-4 pl-7">
        <div> Aa.</div>
        </div>
       <div className="flex justify-end text-white text-2xl gap-6 p-3 px-6 items-baseline ">
        <div>
            <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="about">About</Link>
        </div>
        <div>
          <Link href="contect">Contect</Link>
        </div>
        </div>
    </div>
    
    
  )
}

export default Header
