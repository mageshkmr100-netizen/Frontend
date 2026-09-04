import React, { useState } from 'react'

const Home = () => {
  
  const [data, setData] = useState("")

  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")

  const getmail = (e) => {
    e.preventDefault()
    setMail(e.target.value)
  }

  const getpassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  } 

  const clickchange = () => {
    setData(mail,password)
  }

  return (
    <>
    <div>
      <form>
        <input onChange={getmail} type="text" placeholder='Enter your Mail id'/>
        <input onChange={getpassword} type="text" placeholder='Enter your Password'/>
        <button onClick={clickchange}>Login</button>
      </form>
      <p>{data}</p>
    </div>
    </>
  )
}

export default Home