import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import MainPage from "./MainPage"

const Login = () => {

    const navigate = useNavigate()

    const [mail, setMail] = useState()
    const [password, setPassword] = useState()


    const maildata = (e) => {
        setMail(e.target.value)
    }

    const passworddata = (e) => {
        setPassword(e.target.value)
    }


    const usermail = "admin123@gmail.com"
    const userpassword = "123456"

    const validation = (e) => {
        e.preventDefault()
        
        if (mail === usermail && password === userpassword){
            navigate("/home")
        }else{
            navigate("/register")
        }
    }


  return (
    <>
    <div className="bg-amber-50 flex justify-center items-center p-3 h-screen">
        <div className="bg-red-50 flex flex-col gap-5 justify-center items-center border rounded-2xl w-110 h-80">
            <h1 className="font-semibold text-3xl">Login Page</h1>
            <form className="flex flex-col w-60 gap-6 justify-start">
                <input onChange={maildata} type="email" placeholder="Enter your Email Id" className="border bg-gray-100 rounded p-2 "/>
                <input onChange={passworddata} type="password" placeholder="Enter the Password" className="border bg-gray-100 rounded p-2"/>
                <div className="flex gap-10">
                <button onClick={validation} className="bg-blue-400 rounded w-30 p-1 text-white hover:bg-blue-500 hover:text-white">Login</button>
                <Link className="text-blue-500 hover:text-purple-300" to='/register'>Sign Up</Link>    
                </div>     
            </form>
            
        </div>
    </div>
    </>
  )
}

export default Login