import Image from "next/image"
import Link from "next/link"

const MovieCard = (currentElement) => {
 return (
  <>
   <div className="col-md-3 mt-2">
    <div className="card">
     <Image className="card-img-top" src={currentElement.jawSummary.backgroundImage.url} width={150} height={140} alt="Card Image" />

     <div className="card-body">
      <h5 className="card-title">{currentElement.jawSummary.title}</h5>
      <p className="card-text">{currentElement.jawSummary.synopsis}</p>

      <Link href={`/movie/${currentElement.jawSummary.id}`} className="btn btn-primary">Know More</Link>
     </div>
    </div>
   </div>
  </>
 )
}
export default MovieCard