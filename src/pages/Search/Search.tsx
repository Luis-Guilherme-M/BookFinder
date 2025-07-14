import './Search.css'
import Navbar from '../../components/Navbar/Navbar'
import { SearchImages } from '../../assets/SearchImages'
import { ChevronRight, SearchIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Search = () => {
  interface Book {
    id: string;
    volumeInfo: {
      title: string;
      authors?: string[];
      publishedDate?: string;
      publisher?: string;
      imageLinks: {
        smallThumbnail?: string;
        thumbnail?: string;
      };
    };
  }

  const [search, setSearch] = useState<string>('')
  const [data, setData] = useState<Book[]>()
  
  const apiKey = import.meta.env.VITE_API_KEY
  const searchBook = (evt: React.KeyboardEvent | React.MouseEvent) => {
    if (!search.trim()) return

    if (evt.type === 'click' || evt.type === 'keydown') {
      if ('key' in evt) { if (evt.key !== 'Enter' ) return }
      setData([])

      const queries: string[] = [
        `${search}`,
        `inauthor:${search}`,
        `inpublisher:${search}`,
      ]
      
      queries.forEach(query => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`)
        .then(res => {
          const uniqueBooks = new Map<string, Book>()

          res.data.items.map((book: Book) => {
            if (!uniqueBooks.has(book.id)) {
              uniqueBooks.set(book.id, book)
            }
          })

          setData(prev => {
            const updated = [...(prev || []), ...Array.from(uniqueBooks.values())]
            return updated.sort((a, b) => a.volumeInfo.title.localeCompare(b.volumeInfo.title))
          })
        })
        .catch(err => console.log(err))

      })
    }
  }

  return (
    <div className='root-search'>
      <div className='search'>
        <Navbar />
        <div className='main-search'>
          <p>You don't need to know the name of the book, if you know the name of <br /> the author or publisher, just type, search and find </p>
          <div className='search-container'>
            <div className='search-field'>
              <input onKeyDown={searchBook} onChange={(e) => {setSearch(e.target.value)}} type="text" name="search-books" id="search-input" placeholder='Type author, book name...'/>
              <button onClick={searchBook} type="button" id='search-button'><SearchIcon /></button>
            </div>
        
            {data? (
              <ul className='books-grid'>
                {
                  data.map((item: Book, index: number) => {
                  return (
                    <li className='book-container' key={index}>
                      <img className='thumbnail' src={item.volumeInfo.imageLinks?.thumbnail ?? SearchImages.ImageNotFound} alt="Book Thumbnail" />
                      
                      <div className='book-details'>
                        <h1 className='book-title'>{item.volumeInfo.title}</h1>
                        <p className='authors'><strong>Authors:</strong> {item.volumeInfo.authors?.join(', ') ?? 'Unknow'}</p>
                        <p className='published-date'><strong>Published Date:</strong> {item.volumeInfo.publishedDate}</p>
                        <p className='publisher'><strong>Publisher:</strong> {item.volumeInfo.publisher}</p>
                        <Link className='more' to={`/search/book/${item.id}`}>More <ChevronRight className='arrow-right'/></Link>
                      </div>
                    </li>
                  )
                })
                }
              </ul>
            ) : (
              <img src={SearchImages.Search} alt="Loading..." />
            )

            }

            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
