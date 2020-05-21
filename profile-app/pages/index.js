import Head from 'next/head'
import Navbar from '../components/UI/Navbar/Navbar'
import SideMenu from '../components/UI/Sidemenu/Sidemenu'
import Carousel from '../components/UI/Carousel/Carousel'
import Movielist from '../components/UI/Movielist/Movielist'
import Footer from '../components/UI/Footer/Footer'

const  MOVIE_DATA = [
  {
    id: 1,
    name: 'Dukdui',
    releaseYear: '2020',
    description: 'Dukdui hate Pmee',
    rating: 10.0,
    genre: 'drama',
    image: ''
  },
  {
    id: 1,
    name: 'Pmee go away',
    releaseYear: '2020',
    description: 'Pmee is homeless',
    rating: 0.1,
    genre: 'drama',
    image: ''
  },
  {
    id: 1,
    name: 'Dukdui love Marui',
    releaseYear: '2020',
    description: 'Dukdui love Marui very much',
    rating: 10.0,
    genre: 'family',
    image: ''
  }
]

export default function Home() {
  return  (
  <div>
  <Head>
    <title>Home</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
  </Head>


<Navbar />
<div className="home-page">
<div className="container">
  <div className="row">

    <div className="col-lg-3">
      <SideMenu />
    </div>

    <div className="col-lg-9">
      <Carousel />
      <div className="row">
        <Movielist movies={MOVIE_DATA} />

      </div>
    </div>
  </div>
</div>
</div>
<Footer />
<style jsx>{`
  .home-page{
    padding-top: 80px;
  }
`}
</style>
</div>
)
}
