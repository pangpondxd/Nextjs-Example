const  MOVIE_DATA = [
    {
      id: "1",
      name: 'Dukdui',
      releaseYear: '2020',
      description: 'Dukdui hate Pmee and he eat very much about 50 tons per day and sleep 50 hrs per day WTF!',
      longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 10.0,
      genre: 'drama',
      image: 'https://www-tc.pbs.org/wnet/nature/files/2020/01/48874833297_17e87338bb_b.jpg',
      cover: ''
    },
    {
      id: "2",
      name: 'Pmee go away',
      releaseYear: '2020',
      description: 'Pmee is homeless and he eat very much about 50 tons per day and sleep 50 hrs per day WTF!',
      longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 0.1,
      genre: 'drama',
      image: 'https://news.thaipbs.or.th/media/G0DL5oPyrtt5HBAi37NuFtflmnnP7Vsi6MAmcC2mlYUpkoCqUluDtx.jpg',
      cover: ''
    },
    {
      id: "3",
      name: 'Dukdui love Marui',
      releaseYear: '2020',
      description: 'Dukdui love Marui very much and he eat very much about 50 tons per day and sleep 50 hrs per day WTF!',
      longDesc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      rating: 10.0,
      genre: 'family',
      image: 'https://i.ytimg.com/vi/cE-ts5P_vvA/maxresdefault.jpg',
      cover: ''
    }
  ]

  const CATEGORY_DATA = [
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

  export const getMovies = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(MOVIE_DATA)
        }, 50)
      })
      //create async functionality
        
  }

  export const createMovie = (movie) => {
    return new Promise((resolve, reject) => {
      //create ID for movie

      movie.id = Math.random().toString(26).substr(2, 7)

      MOVIE_DATA.push(movie)
      setTimeout(() => {
          resolve(MOVIE_DATA)
      }, 50)
    })
    //create async functionality
      
}

  export const getMovieById = (id) => {

    return new Promise((resolve, reject) => {
        const movieIndex = MOVIE_DATA.findIndex((m) => {
            return m.id === id
        })

        const movie = MOVIE_DATA[movieIndex]
        setTimeout(() => resolve(movie), 50)
    })
  }