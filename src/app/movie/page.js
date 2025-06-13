import MovieCard from '../components/MovieCard';

const page = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 5000000));
  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'a2d7f2b1e0mshc597eda8e7f81f6p1f43d3jsndd835500605f',
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    }
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const data = result.titles;

  return (
    <>
      <h1>Movies</h1>
      <div className="container">
        <div className="row equal-height-row">
          {
            data.map((currentElement, index) => {
              return <MovieCard key={index} {...currentElement} />
            })
          }
        </div>
      </div>
    </>
  )
}
export default page