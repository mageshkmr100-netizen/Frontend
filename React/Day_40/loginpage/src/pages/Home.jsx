import { Route, Routes } from "react-router-dom"
import Login from "../components/Login"
import NavBar from "../components/NavBar"
import Register from "../components/Register"
import MainPage from "../components/MainPage"
import About from "../components/About"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <>
    <NavBar/>
    
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default Home