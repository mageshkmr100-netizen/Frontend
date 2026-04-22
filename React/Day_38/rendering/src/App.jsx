import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import Rendering from "./components/Rendering"
import StateProcess from "./components/StateProcess"


const App = () => {
  return (
  <>
  <NavBar/>
  <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/render' element = {<Rendering/>}/>
    <Route path = '/state' element = {<StateProcess/>}/>
  </Routes>
  </>
  )
}

export default App