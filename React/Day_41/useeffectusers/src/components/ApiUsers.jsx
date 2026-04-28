import { useEffect, useState } from "react"

const ApiUsers = () => {

    const [fulldata, setFullData] = useState([])

    useEffect(()=>{
        const fetchapi = async()=>{
            const response = await fetch("https://dummyjson.com/users")
            const data = await response.json()
            setFullData(data.users) 
        }
        fetchapi()
    },[])
  return (
    <>
    <div className="grid grid-cols-3 gap-10 place-items-center p-4">
    {fulldata.map((e)=>(
            <div key={e.id} className="bg-amber-100 flex flex-col w-70 h-100 p-2 rounded-2xl">
                <img className="p-2" src={e.image} alt="" />
                <h3 className="font-semibold text-2xl my-3">{e.firstName}</h3>
                <p>{e.phone}</p>
                <p>{e.email}</p>
            </div>
        
    ))}
    </div>
    </>
  )
}

export default ApiUsers