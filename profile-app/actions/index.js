const  MOVIE_DATA = [
    {
      id: "1",
      name: 'Dukdui',
      releaseYear: '2020',
      description: 'Dukdui hate Pmee and he eat very much about 50 tons per day and sleep 50 hrs per day WTF!',
      rating: 10.0,
      genre: 'drama',
      image: 'https://www-tc.pbs.org/wnet/nature/files/2020/01/48874833297_17e87338bb_b.jpg'
    },
    {
      id: "2",
      name: 'Pmee go away',
      releaseYear: '2020',
      description: 'Pmee is homeless and he eat very much about 50 tons per day and sleep 50 hrs per day WTF!',
      rating: 0.1,
      genre: 'drama',
      image: 'https://news.thaipbs.or.th/media/G0DL5oPyrtt5HBAi37NuFtflmnnP7Vsi6MAmcC2mlYUpkoCqUluDtx.jpg'
    },
    {
      id: "3",
      name: 'Dukdui love Marui',
      releaseYear: '2020',
      description: 'Dukdui love Marui very much and he eat very much about 50 tons per day and sleep 50 hrs per day WTF!',
      rating: 10.0,
      genre: 'family',
      image: 'https://i.ytimg.com/vi/cE-ts5P_vvA/maxresdefault.jpg'
    }
  ]

  export const getMovies = () => {
      return new Promise((resolve, reject) => {
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