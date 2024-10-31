import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
        <nav className={"bg-gray-600 text-white"}>
        <ul className={"flex justify-center gap-4 p-4 font-bold text-lg"}>
          <Link href={"/"}><li className={"cursor-pointer"}>Home</li></Link>
          <Link href={"/about"}><li className={"cursor-pointer"}>About</li></Link>
          <Link href={"/blog"}><li className={"cursor-pointer"}>Blogs</li></Link>
          <Link href={"/contact"}><li className={"cursor-pointer"}>Contact</li></Link>
        </ul>
       </nav>
  )
}

export default Navbar