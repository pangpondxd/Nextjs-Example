import SideMenu from '../components/UI/Sidemenu/Sidemenu'
import Carousel from '../components/UI/Carousel/Carousel'
import Movielist from '../components/UI/Movielist/Movielist'
import { getMovies } from '../actions/index'
import React, { useState, useEffect } from 'react'
const Home = (props) => {

  return  (
  <div>
<div className="home-page">
<div className="container">
  <div className="row">

    <div className="col-lg-3">
      <SideMenu />
    </div>

    <div className="col-lg-9">
      <Carousel />
      <div className="row">
        <Movielist movies={props.movies || []} />
      </div>
    </div>
  </div>
</div>
</div>
</div>
)
}
Home.getInitialProps = async () => {
  const movies = await getMovies()
  return {
    movies
  }
}
export default Home