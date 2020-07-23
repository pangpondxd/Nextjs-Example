import React from 'react'
import MovieCreateForm from '../../../components/UI/MovieCreateForm/MovieCreateForm'
import { getMovieById, updateMovie } from '../../../actions'
import Router from 'next/router'
class EditMovie extends React.Component {
    static async getInitialProps({query}) {
       const movie = await getMovieById(query.id)

       return {movie}
      }
      
      updateMovieHandler = (movie) => {
        updateMovie(movie).then((updatedMovie) => {
        Router.push('/movies/[id]', `/movies/${movie.id}`)
        })
      }
    render() {
        const {movie} = this.props
      return (
        <div className="container">
          <h1>Edit the Movie</h1>
          <MovieCreateForm 
            initialData={movie} 
            submitButton="Update"
            handleFormSubmit={this.updateMovieHandler} />
        </div>
      )
    }
  }
  
  
  export default EditMovie