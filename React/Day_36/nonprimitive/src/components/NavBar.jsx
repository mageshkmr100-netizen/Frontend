import logo from "../assets/2.jfif"
import banner from "../assets/3.jpg"


const NavBar = () => {
  return (
    <>
    <div className="maindiv">
        <div>
            <img src={logo} alt="" />
        </div>
        <div className="navstyle">
            <a href="">Home</a>
            <a href="">Contact</a>
            <a href="">About</a>
            <a href="">Support</a>
            <a href="">Login</a>
        </div>
    </div>
    <div className="bannerimg">
        <img src={banner} alt="" />
    </div>
    </>
  )
}

export default NavBar