import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <>
    <div className="bg-black text-white flex justify-between p-4 rounded">
        <div>
            <h1>Logo</h1>
        </div>
        <div className="flex gap-5">
            <Link to="/" className="bg-blue-500 rounded-full w-50 text-center">Conditional Rendering</Link>
            <Link to="/color" className="bg-blue-500 rounded-full w-30 text-center">Color Change</Link>
            <Link to="/theme" className="bg-blue-500 rounded-full w-30 text-center">Theme Change</Link>
            <Link to="/toggle" className="bg-blue-500 rounded-full w-25 text-center">Toggle</Link>
        </div>
    </div>
    </>
  )
}

export default NavBar