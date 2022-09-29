import React from 'react'
import List from '../List'

function SongList() {
  return (
    <div>
        {
          List.map((list) => (
              <div key={list.id}>
                  <h1>{list.name}</h1>
                  <h3>{list.title}</h3>
                  <img src={list.image} alt={list.name}/>
              </div>
          ))
        }
    </div>
  )
}

export default SongList