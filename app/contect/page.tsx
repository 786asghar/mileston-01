import React from 'react'
import aerrow from "@/app/Image/aerrow.png"
import Image from 'next/image'
import Link from 'next/link'

function Contect() {
  return (
    <div>
        <h1 className='text-4xl text-center underline p-3'>Contect Us</h1>
        <footer className="flex justify-between py-8">
          <div className="pl-4 py-5 text-2xl">
            <p>I am thrilled to answer to</p>
            <p>your next project</p>
            <div className="pl-44 ">
            <Image src = {aerrow} width ={50} height={10} alt="aerrow"></Image>
            </div>
          </div>
          <div className="text-2xl py-14 px-10">
          <p>786asgharali.aa@gmail.com</p></div>
          </footer>
          <footer>

          <div className="flex justify-between">
          
            <p className="text-blue-600 flex justify-start text-lg  pl-10">Asghar Ali 2024</p></div>

          <div className=" flex justify-end gap-8 pl-3 px-10">
            <Link href="">WhatsApp</Link>
            <Link href="">GitHub        </Link>
            <Link href="">Linkedin         </Link>
            <Link href="">Vercel           </Link>
          </div>
          
          </footer>
          
    </div>
  )
}

export default Contect
