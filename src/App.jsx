
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Hesder from './components/Hesder'
import Contact from './pages/Contact'
import Course from './pages/Course'
import LandingePage from './pages/LandingePage'
import About from './pages/About'

function App() {


  return (
    <>
    <Hesder/>
 
    <Routes>
      <Route path='/' element={<LandingePage/>}/>
      <Route path='/course' element={<Course/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
