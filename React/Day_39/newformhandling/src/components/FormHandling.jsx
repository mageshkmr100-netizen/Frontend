import { useState } from "react"

const FormHandling = () => {

    const [ValueData, setValueData] = useState("")

    const [SendData, setSendData] = useState("")


    const datavalue = (e) => {
        setValueData(e.target.value)
    }

    const clickData = (e) => {
        setSendData(ValueData)
    }
  return (
    <>
    <div className="border ">
        <form className="flex flex-col justify-center items-start p-4 gap-5 ">
            <input className="border p-2 rounded" onChange={datavalue} type="text" placeholder="Enter the data" />
            <button onClick={clickData}>Click Here</button>
        </form>
        <h1>{SendData}</h1>
    </div>
    
    </>
  )
}

export default FormHandling