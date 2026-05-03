
const FormHandling = () => {
  return (
    <>
    <div className="bg-amber-100 h-screen p-5">
        <div>
            <form className="flex flex-col justify-center items-center gap-4">
                <input type="text" placeholder="Enter your Name" className="border w-70 p-2"/>
                <input type="tel" placeholder="Enter your Name" className="border w-70 p-2"/>
                <input type="email" placeholder="Enter your Name" className="border w-70 p-2"/>
                <input type="password" placeholder="Enter your Name" className="border w-70 p-2"/>
                <input type="submit" value={"Register"} className="border w-70 p-2"/>
            </form>
        </div>
        
    </div>
    </>
  )
}

export default FormHandling