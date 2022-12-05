import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Popup from './components/Popup'


function App() {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <div className='card'>
        <Header triggerBtn={setButtonPopup}/>
        <Body />
        <Footer />
      </div>
      <Popup trigger={buttonPopup} triggerBtn={setButtonPopup}>
      </Popup>
    </div>
  )
}

export default App
