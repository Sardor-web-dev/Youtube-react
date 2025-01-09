import './style.css'
import btn from './btn.png'
import logo from './logo.png'
import search from './search.svg'
import micro from './micro.svg'
import upload from './upload.svg'
import nofic from './nofic.svg'
import channel from './channel.svg'

function Navbar() {
    return (  
        <>
        <nav>
      <div className='left'>
        <button><img className='btn_image' src={btn} alt="" /></button>
        <button><img className='logo' src={logo} alt="" /></button>
      </div>
      <div className='center'>
        <input type="text" placeholder='Search' />
        <button className='search_btn'><img src={search} alt="" /></button>
        <button className='micro'><img src={micro} alt="" /></button>
      </div>
      <div className='right'>
        <button className='upload'><img src={upload} alt="" /></button>
        <button className='nofic'><img src={nofic} alt="" /></button>
        <button className='channel'><img src={channel} alt="" /></button>
      </div>
    </nav>
        </>
    );
}

export default Navbar;