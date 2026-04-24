import { Route, Routes } from "react-router-dom"
import NavBar from "../components/NavBar"
import ConditionalRendering from "../components/ConditionalRendering"
import ColorChange from "../components/ColorChange"
import ThemeChange from "../components/ThemeChange"
import Toggle from "../components/Toggle"

const Home = () => {
  return (
    <>
    <NavBar/>
    <hr className=" text-gray-400"/>
    <Routes>
        <Route path='/' element={<ConditionalRendering/>}/>
        <Route path='/color' element={<ColorChange/>}/>
        <Route path='/theme' element={<ThemeChange/>}/>
        <Route path='/toggle' element={<Toggle/>}/>
    </Routes>
    </>
  )
}

export default Home