import React from 'react'
import './HomeScreen.css'
import requests from '../Requests'

// COMPONENTS
import { Nav } from '../Nav'
import { Banner } from '../Banner'
import { Row } from '../Row'



export const HomeScreen = () => {

  return (
    <div className='homeScreen'>
      <Nav />
  
      <Banner />

      <Row
      title='Recomendados'
      fetchUrl={requests.fetchTrending}
      isLargeRow
      />
      <Row   
      title='Orignais Netflix'
      fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row 
      title='Em Alta'
      fetchUrl={requests.fetchTopRated}
      />
      <Row 
      title='Ação'
      fetchUrl={requests.fetchActionMovies}
      />
      <Row 
      title='Comédia'
      fetchUrl={requests.fetchComedyMovies}
      />
      <Row 
      title='Terror'
      fetchUrl={requests.fetchHorrorMovies}
      />
      <Row 
      title='Romance'
      fetchUrl={requests.fetchRomanceMovies}
      />
      <Row 
      title='Documentário'
      fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  )
}


