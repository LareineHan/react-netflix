import React from 'react'
import './Banner.style.css';
import {usePopularMoviesQuery} from '../../../../hooks/usePopularMovies';
import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge'
import { useGenre } from '../../../../hooks/useGenre';
// import genre from '../../../../utils/genre';
const Banner = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
    const genreData = useGenre().data;
    const genreName_array = () => {
        let array = [];
        if (data && genreData) {
            for (let i = 0; i < data.results[0].genre_ids.length; i++) {
                for (let j = 0; j < genreData.length; j++) {
                    if (data.results[0].genre_ids[i] === genreData[j].id) {
                        array.push(genreData[j].name);
                    }
                }
            }
            console.log('Array', array);
            return array;
        }
    }
    const genreNames = genreName_array();
    console.log('Banner', data);
    if (isLoading) {
        <h1>Loading...</h1>
    }
    if (isError) {
        <Alert variant='danger'>Error: {error.message}</Alert>
    }
  return (// eslint-disable-next-line 
      <div style={{ backgroundImage: "url("+`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].backdrop_path}`+")" }}
          className='banner'>
          <div className='banner-text-area text-white '>
              <h1>{data?.results[0].title}</h1>
              <p>{data?.results[0].overview}</p>
                 <div className='genres'>{genreNames?.map((id) => {
                    return <Badge bg="danger" className='genre-badge'>{id}</Badge>
                })}</div>        

          </div>   

    </div>
  )
}

export default Banner
