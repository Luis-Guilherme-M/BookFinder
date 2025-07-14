import { HomeImages } from '../../assets/HomeImages'
import './Home4.css'

const Home4 = () => {
  return (
    <div className='home4'>
      <div className='images-container'>
        <div className='image-container'>
          <img src={HomeImages.ImageHome5} alt="Image5" />
          <p>Download samples in PDF or EPUB of your favorite books</p>
        </div>
        
        <div className='image-container'>
          <img src={HomeImages.ImageHome6} alt="Image6" />
          <p>Buy the books you're looking for from your phone or PC</p>
        </div>
      </div>

      <div className='technologies'>
        <h3>THE TECHNOLOGIES USED</h3>
        <div className='icons'>
          <img src={HomeImages.IconAngular} className='icon-angular icon-technologies' alt="Icon Angular" />
          <img src={HomeImages.IconNodejs} className='icon-nodejs icon-technologies' alt="Icon NodeJS" />
          <img src={HomeImages.IconGoogle} className='icon-google icon-technologies' alt="Icon Google" />
        </div>
      </div>
    </div>
  )
}

export default Home4
