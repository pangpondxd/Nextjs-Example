import React from 'react'
import MovieCreateForm from '../../../components/UI/MovieCreateForm/MovieCreateForm'
import { getMovieById } from '../../../actions/index'
class EditMovie extends React.Component {
    static async getInitialProps({query}) {
       const movie = await getMovieById(query.id)

       return {movie}
      }
  
    render() {
        const {movie} = this.props
      return (
        <div className="container">
          <h1>Edit the Movie</h1>
          <MovieCreateForm initialData={movie} />
        </div>
      )
    }
  }
  
  
  export default EditMovie