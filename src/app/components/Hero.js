import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = ({ title, ImageUrl }) => {
 return (
  <>
   <div className="container-fluid bg-hero py-5">
    <div className="row row-reverse-mobile">
     <div className="col-md-6 d-flex justify-content-center align-items-center">
      <div className="info-box w-50">
       <h1>{title}</h1>
       <p className="py-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nesciunt veritatis accusamus assumenda. Temporibus veritatis, a repellat eius rerum consequatur voluptatibus magni!</p>
       <Link href="/movie" className="btn btn-success">Watch Here</Link>
      </div>
     </div>

     <div className="col-md-6">
      <Image src={ImageUrl} width={500} height={300} alt="Hero image" className="img-fluid pb-5" />
     </div>
    </div>
   </div>
  </>
 )
}

export default Hero