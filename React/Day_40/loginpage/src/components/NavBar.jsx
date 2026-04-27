import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <div className="flex justify-between p-4 rounded">
        <div>
            <h1>Logo</h1>
        </div>
        <div className="flex gap-5">
            <Link to='/' className="bg-blue-500 rounded-full w-30 text-center text-white">Home</Link>
            <Link to='/register' className="bg-blue-500 text-white rounded-full w-30 text-center">Register</Link>
            <Link to='/about' className="bg-blue-500 text-white rounded-full w-30 text-center">About</Link>
            <Link to='/contact' className="bg-blue-500 text-white rounded-full w-25 text-center">Contact</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar