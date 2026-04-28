import { Route, Routes } from "react-router-dom"
import ApiUsers from "./components/ApiUsers"
import NavBar from "./components/NavBar"
import ApiRecipe from "./components/ApiRecipe"
import ApiTodo from "./components/ApiTodo"
import Timer from "./components/Timer"
import Home from "./components/Home"

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/users' element={<ApiUsers/>}/>
      <Route path='/recipe' element={<ApiRecipe/>}/>
      <Route path='/todo' element={<ApiTodo/>}/>
      <Route path='/timer' element={<Timer/>}/>
    </Routes>
    </>
  )
}

export default App