"use client"
import React, { useState } from 'react'

const ContactForm = () => {
 const [formData, setformData] = useState({
  username: "",
  email: "",
  phone: "",
  msg: ""
 })

 const [status, setStatus] = useState()

 const handleChange = (e) => {
  const name = e.target.name
  const value = e.target.value

  setformData((formData) => ({ ...formData, [name]: value }));
 }

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
   const response = await fetch("/api/contact-us", {
    method: "POST",
    headers: { "Content_Type": "application/json" },
    body: JSON.stringify({
     username: formData.username,
     email: formData.email,
     phone: formData.phone,
     msg: formData.msg
    })
   })

   if (response.status === 200) {
    setformData({
     username: "",
     email: "",
     phone: "",
     msg: ""
    }),
     setStatus("success")
   } else {
    setStatus("error")
   }
  } catch (error) {
   console.log(error)
  }
 }

 return (
  <>
   <form className="card p-3 card-form" onSubmit={handleSubmit}>
    <div className="mb-3">
     <input className="form-control" type="text" name="username" placeholder="Your Name" onChange={handleChange} value={formData.username} />
    </div>

    <div className="mb-3">
     <input className="form-control" type="email" name="email" placeholder="Your Email" onChange={handleChange} value={formData.email} />
    </div>

    <div className="mb-3">
     <input className="form-control" type="text" name="phone" placeholder="Your Phone Number" onChange={handleChange} value={formData.phone} />
    </div>

    <div className="mb-4">
     <textarea className="form-control" name="msg" rows="3" placeholder="Your Message" onChange={handleChange} value={formData.msg}></textarea>
    </div>

    <div>
     {status === "success" && <p className="text-success">Thank you for submitting form.</p>}
     {status === "error" && <p className="text-danger">Submitting form failed!</p>}
     <button className="btn btn-success" type="submit">Submit</button>
    </div>

   </form>
  </>
 )
}

export default ContactForm