import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <div className="flex justify-between p-4 rounded">
        <div>
            <h1 className="bg-amber-400 rounded-full text-white w-20 text-center">Logo</h1>
        </div>
        <div className="flex gap-5">
            <Link to='/' className="bg-blue-500 text-white rounded-full w-30 text-center">Home</Link>         
            <Link to='/users' className="bg-blue-500 rounded-full w-30 text-center text-white">Users</Link>
            <Link to='/recipe' className="bg-blue-500 text-white rounded-full w-30 text-center">Recipe</Link>
            <Link to='/todo' className="bg-blue-500 text-white rounded-full w-30 text-center">To-Do</Link>
            <Link to='/timer' className="bg-blue-500 text-white rounded-full w-25 text-center">Timer</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar