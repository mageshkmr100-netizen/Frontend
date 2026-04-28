import { useEffect, useState } from "react"

const ApiRecipe = () => {
  const [recipe, setRecipe] = useState([])

  useEffect(()=>{
    const fetchrec = async()=>{
      const response = await fetch("https://dummyjson.com/recipes") 
      const data = await response.json()
      setRecipe(data.recipes)

    }
    fetchrec()
  },[])
  return (
    <>
    {recipe.map((e)=>(
      <div key={e.id}>
        <h1>{e.name}</h1>
        <ol>
          <li>{e.ingredients}</li>
        </ol>
      </div>
    ))}
    </>
  )
}

export default ApiRecipe