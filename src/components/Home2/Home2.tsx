import { HomeImages } from '../../assets/HomeImages'
import './Home2.css'

const Home2 = () => {
  return (
    <div className='home2'>
      <h3 className='home2-title'>THE IMPORTANCE OF READING BOOKS</h3>
      
      <div className='topics-container'>
        <div>
          <h4>READING PRACTICE IMPROVES VOCABULARY</h4>
          <p>Whether for pleasure, study or information, reading practice improves vocabulary and streamlines reasoning and interpretation. </p>
        </div>
        <div><img src={HomeImages.ImageHome1} alt="Image1" /></div>
        
        <div className='advancing-technology'><img src={HomeImages.ImageHome2} alt="Image2" /></div>
        <div className='advancing-technology'>
            <h4>ADVANCING TECHNOLOGY</h4>
            <p>Whether for pleasure, study or information, reading practice improves vocabulary and streamlines reasoning and interpretation. </p>
        </div>
        
        <div>
            <h4>DYNAMIC READING</h4>
            <p>Dynamic and relaxed reading is one of the best ways to acquire information. The ideal is to learn to read informative texts, scientific articles, textbooks, educational books, etc. </p>
        </div>
        <div><img src={HomeImages.ImageHome3} alt="Image3" /></div>
      </div>
    </div>
  )
}

export default Home2
