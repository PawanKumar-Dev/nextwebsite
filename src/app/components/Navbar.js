import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
 return (
  <>
   <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
    <div className="container-fluid">
     <Link className="navbar-brand" href="/">
      <Image src="/planet-earth.png" width={50} height={50} alt="logo" />
     </Link>

     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
      <span className="navbar-toggler-icon"></span>
     </button>

     <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
       <li className="nav-item px-2">
        <Link className="nav-link active" aria-current="page" href="/">Home</Link>
       </li>
       <li className="nav-item px-2">
        <Link className="nav-link" href="/about-us">About Us</Link>
       </li>
       <li className="nav-item px-2">
        <Link className="nav-link" href="/movie">Movie</Link>
       </li>
       <li className="nav-item px-2">
        <Link className="nav-link" href="/contact-us">Contact Us</Link>
       </li>
      </ul>
     </div>
    </div>
   </nav>
  </>
 )
}

export default Navbar