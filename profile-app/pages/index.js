import SideMenu from "../components/UI/Sidemenu/Sidemenu";
import Carousel from "../components/UI/Carousel/Carousel";
import Movielist from "../components/UI/Movielist/Movielist";
import { getMovies, getCategories } from "../actions/index";
import React, { useState, useEffect } from "react";
const Home = (props) => {
  const {images, categories, movies} = props
  const [filter, setFilter] = useState('all')


  const categoryChangedHandler = category => {
    setFilter(category)
  }

  const filterMovies = movies => {
    if(filter === 'all'){
      return movies
    }
    return movies.filter((m) => {
      return m.genre && m.genre.includes(filter)
    })
  }


  return (
    <div>
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideMenu 
                categoryChangedHandler={categoryChangedHandler}
                activeCategory={filter}
                appName={"Movie DB"} 
                categories={categories}
              />
            </div>

            <div className="col-lg-9">
              <Carousel images={images} />
              <h1>{filter} movies</h1>
              <div className="row">
                <Movielist movies={filterMovies(movies) || []} />
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
      url: movie.cover,
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
