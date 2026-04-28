import React, { useEffect, useState } from 'react'

const ApiTodo = () => {
  const [newdata, setNewData] = useState([])

  useEffect(()=>{
    const fetchtodo = async()=>{
      const response = await fetch("https://dummyjson.com/todos")
      const data = await response.json()
      setNewData(data.todos)
    }
    fetchtodo()
  },[])
  return (
    <>
    <table className='border'>
      <thead>
        <tr className='border'>
          <th>S.no</th>
          <th>To-Do</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {newdata.map((e)=>(
          <tr key={e.id} className='border'>
            <td className='border'>{e.id}</td>
            <td className='border'>{e.todo}</td>
            <td className='border'>{e.completed}</td>
        </tr>
        ))}
      </tbody>
    </table>
    
    </>
  )
}

export default ApiTodo