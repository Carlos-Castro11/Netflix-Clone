import React from 'react'
import { useState, useEffect } from 'react'
import axios from '../axios'
import './Row.css'

export const Row = ({title, fetchUrl, isLargeRow}) => {

  const [movies, setMovies] = useState([])

  const base_url = 'https://image.tmdb.org/t/p/original/'

  useEffect(() => {
    async function FetchDataMovies () {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    } 
    FetchDataMovies()
  }, [fetchUrl])


  return (
    <div className='row'>
      <h2>{ title }</h2>

      <div className="row-posters">
        {movies.map(movie => (
            <img 
            className={`row-poster ${isLargeRow && 'row-posterLarge'}`}
            key={movie.id}
            src={`${base_url}${
            isLargeRow ? movie.poster_path : movie.backdrop_path
          }`} alt={movie.name} />
        ))}
      </div>
    </div>
  )
}


