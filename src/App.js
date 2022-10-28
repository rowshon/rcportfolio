
import './App.css';
import { Route, Routes } from "react-router-dom"
import MenuBar from './pages/MenuBar';
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import Snow from './snow/SnowRc'
import Portfolio from './pages/Portfolio';
import QR from './pages/QRCodeScanner';
import Experiance from './pages/Experiences';

function App() {
  return (
    <>
      <div className='menu-component'>
        <MenuBar />
      </div>
      <div className="App-container">
        <div className="container-app">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/experiance" element={<Experiance />} />
            <Route path="/snow" element={<Snow />} />
            <Route path="/qr" element={<QR />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
