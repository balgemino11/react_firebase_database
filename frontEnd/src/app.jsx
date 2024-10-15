import React, { useEffect, useState } from 'react'

export const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:8081/users')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div>
      <table>
        <thead>
          <th>id</th>
          <th>name</th>
          <th>status</th>
          <th>date created</th>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.status}</td>
              <td>{d.date_created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
