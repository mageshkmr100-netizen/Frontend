import { useState } from "react"

const ColorChange = () => {
    
    
    const [colour, setColour] = useState("bg-white")

    const clicktochange = () => {

        if (colour === "bg-white"){
            setColour("bg-green-500")
        }
        if (colour === "bg-green-500"){
            setColour("bg-purple-500")
        }
        if (colour === "bg-purple-500"){
            setColour("bg-white")
        }
    }


    const handlecolour = () => {
    setColour("bg-red-500")
    }
    
  return (
    <>
    <div className="bg-amber-500 text-white p-10 flex flex-col justify-center items-center h-100 gap-4">
        <div className={`${colour} text-black p-2 w-80 h-60 flex justify-center items-center`}>
            Box
        </div>
        <button onClick={clicktochange} className="bg-blue-500 w-40 rounded-full text-center text-white">
            Change Color
        </button>
    </div>

    <hr />

    <div className="bg-black text-white p-10 flex flex-col justify-center items-center h-100 gap-4">
        <div className={`${colour} text-black p-2 w-80 h-60 flex justify-center items-center`}>
            Box
        </div>
        <button onClick={handlecolour} className="bg-blue-500 w-40 rounded-full text-center text-white">
            Change Color to R ed
        </button>
    </div>
    </>
  )
}

export default ColorChange