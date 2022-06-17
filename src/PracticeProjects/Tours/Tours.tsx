import React, { useState } from 'react'
import { data } from './data'
import { Tour } from './Tour'

export const Tours: React.FC = () => {
  const [tours, setTours] = useState(data)
  function handleDelete(id: string, e: React.MouseEvent) {
    e.preventDefault()
    setTours((prevTours) => prevTours.filter(tour => tour.id !== id))
  }

  function handleRefresh() {
    setTours(data)
  }

  if(tours.length === 0) {
    return (
      <div className="no-tours">
        <h1>No Tours Left</h1>
        <button onClick={() => handleRefresh()}>Refresh Tours</button>
      </div>
    )
  }
  return (
    <main className='tours'>
      <h1 style={{margin: "1.5rem"}}>Our Tours</h1>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} handleDel={handleDelete} />
        })}
      </div>
    </main>
  )
}
