import {useState} from 'react'
import {useRouter} from 'next/router'
import Modal from '../Modal/Modal'
import MovieCreateForm from '../MovieCreateForm/MovieCreateForm'
import { createMovie } from '../../../actions/index'

const SideMenu = (props) => {
  const { categories } = props
  const router = useRouter()
  let modal = null
  const createMovieHandler = (movie) => {
    createMovie(movie).then((movies) => {
      //close modal after create
      router.push('/')
      modal.closeModal()
    })
  }

  return (
    <div>
      <Modal ref={ele => modal = ele } hasSubmit={false}>
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
