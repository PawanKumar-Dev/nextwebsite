import Image from 'next/image';
import Link from 'next/link';

const page = async ({ params }) => {
 const id = params.id;

 const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}ang=en`;
 const options = {
  method: 'GET',
  headers: {
   'x-rapidapi-key': 'a2d7f2b1e0mshc597eda8e7f81f6p1f43d3jsndd835500605f',
   'x-rapidapi-host': 'netflix54.p.rapidapi.com'
  }
 };

 const response = await fetch(url, options);
 const result = await response.json();
 const data = result[0].details;

 return (
  <>
   <div className="container">
    <div className="row">
     <div className="col-md-6">
      <div className="card mt-5">
       <Image className="card-img-top" src={data.backgroundImage.url} width={150} height={350} alt="Card Image" />

       <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <h3>{data.type}</h3>
        <p className="card-text">{data.synopsis}</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 )
}

export default page