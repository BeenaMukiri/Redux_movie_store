import React, { useEffect } from 'react'
import MovieListing from'../MovieListing/MovieListing'
import movieApi from '../../common/Apis/MovieApi'
import {APIKey } from '../../common/Apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies, fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/MovieSlice'
const Home = () => {
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
    

  },[dispatch])
  return (
    <div >
      <div className="banner-img">
        <MovieListing/>
        
      </div>

    </div>
  )
}

export default Home