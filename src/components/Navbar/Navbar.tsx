import './Navbar.css'
import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const toggleOptions = () => {
    const navbarOptions = document.querySelector('.navbar-opts-collapse')

    if (navbarOptions) {
      const navbarOptions = document.querySelector('.navbar-opts-collapse') as HTMLElement
      
      if (navbarOptions) { navbarOptions.classList.toggle('active') }
    }
  }

  return (
    <nav className='navbar'>
      <div className='navbar-header'>
        <h1 className='title'><Link className='link' to={'/'}>Book Finder</Link></h1>
        
        <button onClick={toggleOptions} type="button" id='navbar-button'><Menu /></button>

        <ul className='navbar-opts-lg navbar-opts'>
          <li><Link className='link' to={'/'}>About</Link></li>
          <li><a href="https://github.com/Luis-Guilherme-M" target='_blank' rel='noopener noreferrer' className='link contact'>Contact</a></li>
        </ul>
      </div>

      <ul className='navbar-opts-collapse navbar-opts'>
        <li><Link className='link' to={'/'}>About</Link></li>
        <li><a href="https://github.com/Luis-Guilherme-M" className='link contact'>Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
