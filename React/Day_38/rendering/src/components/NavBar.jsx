import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className='bg-black flex justify-between items-center text-white p-3 rounded my-1'>
        <div>
            <h1>Logo</h1>
        </div>
        <div className='flex gap-7'>
            <Link to="/" className='hover:text-red-500 border border-purple-500 rounded text-center'>Home</Link>
            <Link to="/state" className='hover:text-amber-400 border border-purple-500 rounded text-center'>State Process</Link>
            <Link to="/render" className='hover:text-blue-500 border border-purple-500 rounded text-center'>Rendering</Link>
        </div>
    </div>
    <hr className='bg-gray-600'/> 
    </>
  )
}

export default NavBar