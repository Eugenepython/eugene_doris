import Movie from '../../public/images/Movie.jpg';


function MovieSearch() {

  return (
    <>
      <div>

        <h1>Movie search engine</h1>
        <p className='paragraph-container' >This is a search engine utilising the Open Movie Database. I used react to build an app to display details of movies uniformaly, and also store chosen movies in a seperate watchlist using local storage. </p>
        <img className='portFolioImage' src={Movie} alt="movie" />

        <p><a className='white' href="https://github.com/Eugenepython/MovieSearch" target="_blank" rel="noopener noreferrer">First attempt Github page and source code</a></p>


        <p><a className='white' href="https://movie-search-and-list.netlify.app/" target="_blank" rel="noopener noreferrer">Website adapted for mobiles</a></p>

      </div>
    </>
  )
}

export default MovieSearch