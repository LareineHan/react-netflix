import './MovieCard.style.css';
import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { useGenre } from '../../../../hooks/useGenre';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';


const MovieCard = ({ movie, index }) => {
    
    const genreData = useGenre().data;

    const genreName_array = () => {
        let array = [];
        if (movie && genreData) {
            for (let i = 0; i < movie.genre_ids.length; i++) {
                for (let j = 0; j < genreData.length; j++) {
                    if (movie.genre_ids[i] === genreData[j].id) {
                        array.push(genreData[j].name);
                    }
                }
            }
            return array; 
        }
    }
    const genreNames = genreName_array();

    return (// eslint-disable-next-line 
        <div className='movie-card' style={{ backgroundImage: "url(" + `https://image.tmdb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`+")"}}>
      
            <div className='overlay'>
                <h1 className='card-movie-title'>{movie.title}</h1>
                {genreNames.map((id) => {
                    return <Badge bg="danger" className='genre-badge'>{id}</Badge>
                })}
           
            <div className='detail'>
                <div className='vote'><FontAwesomeIcon icon={faCheckToSlot}/>{movie.vote_average}</div>
                <div className='popular'><FontAwesomeIcon icon={faFire} />{movie.popularity}</div>
                <div className='adult'>{movie.adult ? 'R-18' : 'PG'}</div>
                   
            </div> </div>
    </div>
  )
}

export default MovieCard


