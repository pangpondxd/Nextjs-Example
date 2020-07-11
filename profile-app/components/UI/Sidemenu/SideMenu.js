import {useState} from 'react'
import Modal from '../Modal/Modal'
import MovieCreateForm from '../movieCreateForm/movieCreateForm'
import { createMovie } from '../../../actions/index'
const SideMenu = (props) => {
  const { categories } = props;

  const createMovieHandler = (movie) => {
    createMovie(movie).then((movies) => {
      console.log(JSON.stringify(movies))
    })
  }

  return (
    <div>
      <Modal hasSubmit={false}>
        <MovieCreateForm handleFormSubmit={createMovieHandler} />
      </Modal>
      <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        {categories.map((c) => (
          <a key={c.id} href="#" className="list-group-item">
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
