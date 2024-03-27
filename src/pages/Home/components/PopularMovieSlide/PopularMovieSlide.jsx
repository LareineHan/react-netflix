import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './PopularMovieSlide.style.css';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


const PopularMovieSlide = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery()
    console.log('ㅇㅇ', data)

    if (isLoading) {
        return <h1>Loading...</h1>
    }   
    if (isError) {
        return <Alert variant='danger'>Error: {error.message}</Alert>
    }
    return (
    <div>
            <h3 className='title'>Popular Movies</h3>
            <Carousel
                infinite={true}
                centerMode={true}
                itemClass='movie-slider p1'
                containerClass='carousel-container'
                responsive={responsive}
                keyBoardControl={true}
               
            >
                {data.results.map((movie, index) => (
                    <MovieCard key={index} movie={movie} />
                ))}

</Carousel>
    </div>
  )
}

export default PopularMovieSlide
