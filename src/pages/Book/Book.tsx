import './Book.css'
import Navbar from '../../components/Navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { SearchImages } from '../../assets/SearchImages'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'

const Book = () => {
  const { id } = useParams()

  interface Book {
    title: string;
    authors?: string[];
    publishedDate?: string;
    publisher?: string;
    description?: string;
    pageCount?: number;
    averageRating?: number;
    imageLinks: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
  }

  const [data, setData] = useState<Book>()

  useEffect(() => {
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    .then(res => setData(res.data.volumeInfo))
    .catch(err => console.error(err))
  }, [id])
  
  return (
    <div className='root-book'>
      <div className='main-book'>
        <Navbar />
        {data? (
          <div className='book'>
            <div className='book-card'>
              <div className='book-card-1'>
                <Link className='book-anchors comeback' to={'/search'}>Back</Link>
                <h1 className='card-title'>{data.title}</h1>
                <img src={data.imageLinks?.smallThumbnail ?? SearchImages.ImageNotFound} alt="Book Thumbnail" />
              </div>
              <div className='book-card-2'>
                <p className='authors'><strong>Authors:</strong> {data.authors}</p>
                <p className='publisher'><strong>Publisher:</strong> {data.publisher}</p>
                <p className='published-date'><strong>Published Date:</strong> {data.publishedDate}</p>
                <p className='page-count'><strong>Number of pages:</strong> {data.pageCount}</p>
                <p className='rating'><strong>Critic's Opinion: </strong> <Star />{data.averageRating}</p>
              </div>
            </div>
            <div className='book-aside'>
              <div className='book-aside-1'>
                <h2 className='aside-title'>Book Description</h2>
                <p className='book-description'>{data.description}</p>
              </div>
              
              <div className='book-links'>
                <a href={`http://play.google.com/books/reader?id=${id}=&source=gbs_api`} target='_blank' rel='noopener noreferrer' className='book-anchors read-book'>Read a sample</a>
                <a href={`https://play.google.com/store/books/details?id=${id}&rdid=book--bF2CwAAQBAJ&rdot=1&source=gbs_api`} target='_blank' rel='noopener noreferrer' className='book-anchors buy-book'>Buy this book</a>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )
        }
      </div>
    </div>
  )
}

export default Book
