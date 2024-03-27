import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
// 1. banner => popular movies's first item
// 2. popular movies
// 3. top rated movies
// 4. upcoming movies
const Homepage = () => {
  return (
    <div>
      <Banner />
      <PopularMovieSlide />
    </div>
  )
}

export default Homepage
