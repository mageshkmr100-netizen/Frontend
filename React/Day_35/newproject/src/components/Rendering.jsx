
const Rendering = () => {

    const string = "This is a String"

    const int = 234

    const value = true

    const null_value = null

  return (<>
    
    <h1>{string}</h1> 

    <h1>{int}</h1> 

    <h1>{value?"This is True":"This is false"}</h1>

    <h1>{value && "This is Absolutely True"}</h1>

{/* returns the string or value inside the condition */}

    <h1>{null_value ?? "This value is Null"}</h1> 
    </>
  )
}

export default Rendering