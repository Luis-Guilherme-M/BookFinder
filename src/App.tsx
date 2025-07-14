import Navbar from './components/Navbar/Navbar'
import Home1 from './components/Home1/Home1'
import Home2 from './components/Home2/Home2'
import Home3 from './components/Home3/Home3'
import Home4 from './components/Home4/Home4'
import Footer from './components/Footer/Footer'
import './index.css'

function App() {
  return (
    <div className='app'>
      <main>
        <Navbar />

        <Home1 />

        <Home2 />
      
        <Home3 />
      
        <Home4 />
      </main>

      <Footer />
    </div>
  )
}

export default App
