import axios from 'axios'

  const MOVIE_DATA = []
  const BASE_URL = 'http://localhost:3000'
  const CATEGORY_DATA = [
    {id: 'c-0', name: 'all'},
    {id: 'c-1', name: 'drama'},
    {id: 'c-2', name: 'action'},
    {id: 'c-3', name: 'advanture'},
    {id: 'c-4', name: 'historical'}
  ]
  

  //get category function
  //get categories in index page
  //provide categories to sidemenu
  //in sidemenu iterate categories and display them

  export const getCategories = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(CATEGORY_DATA)
      }, 50)
    })
  }

  // export const postPicture = async () => {
  //   return await axios.post(`${BASE_URL}/api/v1/upload`).then(res => res.data)
  // }

  export const getPosts = () => {
    return axios.get(`${BASE_URL}/api/v1/posts`).then(res => res.data)
  }

  export const getMovies =  () => {
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //       resolve(MOVIE_DATA)
      //   }, 50)
      // })
      //create async functionality
      return  axios.get(`${BASE_URL}/api/v1/movies`).then(res =>  res.data)
  }

  export const createMovie =  (movie) => {
    movie.id = Math.random().toString(36).substr(2, 5)
    return  axios.post(`${BASE_URL}/api/v1/movies`, movie).then(res =>  res.data)
}

  export const getMovieById =  (id) => {
    return  axios.get(`${BASE_URL}/api/v1/movies/${id}`).then(res =>  res.data)
  }

  export const updateMovie =  (movie) => {
    return  axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
      .then(res =>  res.data)
  }

  export const deleteMovie = async (id) => {
    return await axios.delete(`${BASE_URL}/api/v1/movies/${id}`).then(res => res.data)
  }