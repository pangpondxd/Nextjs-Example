import react from 'react'

class MovieList extends React.Component{
    render(){
        const { movies } = this.props
        return (
            <React.Fragment>
                {movies.map((movie) => {
                    return (
                        <div className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                          <a href="#"><img className="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                          <div className="card-body">
                            <h4 className="card-title">
                              <a href="#">{movie.name}</a>
                            </h4>
                            <h5>$24.99</h5>
                    <p className="card-text">{movie.description}</p>
                          </div>
                          <div className="card-footer">
                    <small className="text-muted">{movie.rating}</small>
                          </div>
                        </div>
                      </div>
                    )
                })}
            </React.Fragment>
        )
    }    
    }
    
export default MovieList