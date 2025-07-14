import { HomeImages } from '../../assets/HomeImages'
import './Home1.css'
import { Link } from 'react-router-dom'

const Home1 = () => {
  return (
    <div className='home1-container'>
      <div className='apresentation-container'>
        <h1 className='apresentation-title'>Find the <span>books</span> you are looking for anywhere</h1>
        
        <div className='call-search'>
          <h2>Search for books anywhere, you don't need to know the name of the book, if you know the name of the author or the publisher, just type and search. </h2>
          <Link className='search-now' to={'/search'}>Search now</Link>
        </div>
      </div>

      <img src={HomeImages.MainApresentation} alt="Apresentation image" />
    </div>
  )
}

export default Home1
