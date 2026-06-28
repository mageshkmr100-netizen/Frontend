import React, { useState } from 'react'

const Home = () => {

    const [namedata, useNameData] = useState("")
    const [phonedata, usePhoneData] = useState("")
    const [maildata, useMailData] = useState("")
    const [passworddata, usePasswordData] = useState("")
    const [data, useData] = useState("")

  const username = (e) => {
    e.preventDefault()
    useNameData(e.target.value)    
  }

  const userphone = (e) => {
    e.preventDefault()
    usePhoneData(e.target.value)
  }

  const usermail = (e) => {
    e.preventDefault()
    usePhoneData(e.target.value)
  }
  
  const userpassword = (e) => {
    e.preventDefault()
    usePhoneData(e.target.value)
  }

  const clicksubmit = () => {
    useData(namedata)
    useData(phonedata)
  }
  return (
    <>
    <form>
      <input onChange={username} type="text" placeholder='Enter your name'/>
      <input onChange={userphone} type="num" placeholder='Enter your phone number'/>
      <input onChange={usermail} type="email" placeholder='Enter your email'/>
      <input onChange={userpassword} type="password" placeholder='Enter your password'/>
      <button onClick={clicksubmit}>Submit</button>
    </form>
    <h1>{namedata}</h1>
    <h2>{phonedata}</h2>
    <a>{maildata}</a>
    <p>{passworddata}</p>
    </>
  )
}

export default Home