import React from 'react'
import { useState,useEffect } from 'react'

const Display = () => {
    const [userInfo, setuserInfo] = useState([])
    useEffect(() => {
        Axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            setuserInfo(res.data)
            console.log(res.data);
        });
    }, []);

  return (
      <table className='table'>
          <tr>
              <th>Name</th>
              <th>Birth Date</th>
          </tr>
          {userInfo.map((user) => (
              <tr>        
                  <td>{user.name}</td>
                  <td>{user.birthDate}</td>
                </tr>
          ))}
    </table>
  )
}

export default Display
