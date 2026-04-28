import { useEffect, useState } from "react"

const ApiData = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        const fetchdata = async() => {
        const response = await fetch("https://dummyjson.com/products")
        const dataval = await response.json()

        setData(dataval.products)
        }
        fetchdata()
    }, [])
  return (
    <>
    {data.map((e)=>(
      <h1 key={e.id}>{e.title}</h1>
    ))}
    </>
  )
}

export default ApiData