import SideMenu from "../components/UI/Sidemenu/Sidemenu";
import Carousel from "../components/UI/Carousel/Carousel";
import Movielist from "../components/UI/Movielist/Movielist";
import { getMovies, getCategories } from "../actions/index";
import React, { useState, useEffect } from "react";
const Home = (props) => {
  const {images, categories, movies} = props
  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu 
                appName={"Movie DB"} 
                categories={categories}
              />
            </div>

            <div className="col-lg-9">
              <Carousel images={images} />
              <div className="row">
                <Movielist movies={movies || []} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


Home.getInitialProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map((movie)=> {
    return {
      id: `image-${movie.id}`,
      url: movie.image,
      name: movie.name
    }
  })
  return {
    movies,
    images,
    categories
  };
};
export default Home;
