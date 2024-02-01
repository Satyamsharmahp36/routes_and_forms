import './App.css'
import { Routes ,Route } from 'react-router-dom'
import NavBar from './assets/component/Navbar'
import Registration from './assets/component/Registration'
import Home from './assets/component/Home'
import Contact from './assets/component/Contact'

function App() {
  
  return (

    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
      </Routes>
     
    </>
  )
}

export default App
