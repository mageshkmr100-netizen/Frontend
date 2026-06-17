import React, { useState } from 'react'

const App = () => {

  const [namedata, useNameData] = useState("")

  const username = (e) => {
    e.preventDefault()
    let data = useNameData(e.target.value)
    console.log(data);
    
    
  }
  
  return (
    <>
    <form>
      <input onChange={username} type="text" placeholder='Enter your name'/>
      <input type="num" placeholder='Enter your phone number'/>
      <input type="email" placeholder='Enter your email'/>
      <input type="password" placeholder='Enter your password'/>
    </form>
    </>
  )
}

export default App