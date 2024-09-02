import React from 'react'

function List({ data }) {


  return (
    <div>
        <ul>
        {data && data.map((item, index) => (
          <li key={index}>{item.login}</li>
        ))}
        </ul>
    </div>
  )
}

export default List