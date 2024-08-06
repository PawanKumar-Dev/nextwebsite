import ContactCards from '../components/ContactCards'
import ContactForm from '../components/ContactForm'

const page = () => {
 return (
  <>
   <div className="container">
    <h2 className="text-center py-4">Contact Us</h2>
    <ContactCards />

    <div className="row">
     <h2 className="py-4 text-center">Contact Form</h2>
     <div className="d-flex justify-content-center">
      <ContactForm />
     </div>
    </div>
   </div>
  </>
 )
}

export default page