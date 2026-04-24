import { useState } from "react"

const ConditionalRendering = () => {


    const [value, setValue] = useState(false)

  const trueorfalse = () => {
    setValue(!value)

  }
  
  return (
    <>
    <div className="bg-white text-black flex flex-col justify-center items-center gap-5 p-3 h-screen">
      <div>
        <p className="font-semibold">Conditional Rendering</p>
      </div>
      <div>
        <p>{value ?<p className="bg-green-500 text-white rounded-full p-3 w-40 text-center">This is True</p>:<p className="bg-red-500 text-white rounded-full p-3 w-40 text-center">This is False</p>}</p>
      </div>
      <div>
        <button onClick={trueorfalse} className="bg-blue-500 text-white p-2 rounded-full w-40 text-center">Click Here</button>
      </div>
    </div>


    <div className="bg-red-500 text-white flex flex-col justify-center items-center gap-5 p-3 h-screen">
      <div>
        <p className="font-semibold">Optional Rendering</p>
      </div>
      <div>
        <p>{value&&<p className="bg-green-500 text-white rounded-full w-40 text-center p-3">This is True</p>}</p>
      </div>
      <div>
        <button onClick={trueorfalse} className="bg-blue-500 p-2 rounded-full w-40 text-center">Click Here</button>
      </div>
    </div>
    </>

  )
}

export default ConditionalRendering