import './App.css'
import Navbar from './components/Navbar/Navbar'


function App() {

  return (
    <>
    <Navbar/>
    <main>
      <div className='navigation'>
        <div>

        </div>
        <div className='Home'>
          <img src="" alt="" />
          <p>Home</p>
        </div>
        <div className='Explore'>
          <img src="" alt="" />
          <p>Explore</p>
        </div>
        <div className='Shorts'>
          <img src="" alt="" />
          <p>Shorts</p>
        </div>
        <div className='Subscriptions'>
          <img src="" alt="" />
          <p>Subscriptions</p>
        </div>

        <hr />
        <div className='Library'>
          <img src="" alt="" />
          <p>Library</p>
        </div>
        <div className='History'>
          <img src="" alt="" />
          <p>History</p>
        </div>
        <div className='Your videos'>
          <img src="" alt="" />
          <p>Your videos</p>
        </div>
        <div className='Watch later'>
          <img src="" alt="" />
          <p>Watch later</p>
        </div>
        <div className='Liked videos'>
          <img src="" alt="" />
          <p>Liked videos</p>
        </div>

        <hr />
      </div>
    </main>
    </>
  )
}

export default App
