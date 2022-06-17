import React, { useState } from 'react'
import { data } from '../Tours/data'
import { TourFlip } from './TourFlip'

export const ToursFlip: React.FC = () => {
  // const [tours, setTours] = useState(data)
  const [tourIndex, setTourIndex] = useState(0)

  const handleRight = () => {
      if(tourIndex >= data.length - 1) {
          setTourIndex(() => { return 0 })
      }
      else {
        setTourIndex((prevIndex) => { return prevIndex + 1 })
      }
  }

  const handleLeft = () => {
    if(tourIndex === 0) {
        setTourIndex(() => { return data.length - 1 })
    }
    else {
      setTourIndex((prevIndex) => { return prevIndex - 1 })
    }
}
  
  return (
    <main className='tours'>
      <h1 style={{marginBottom: "1.5rem", textAlign: "center"}}>Our Tours</h1>
      <div className="tours-container">
        {data.map((tour, ind) => {
          //style={{display:"flex", flexDirection: "row"}}
          let position = "next-tour"
          if(ind === tourIndex) {
            position = "activeTour"
          }
          if(ind === tourIndex - 1 || (tourIndex === 0 && ind === data.length - 1)) {
            position = "prev-tour"
          }
          return <div className={`tour-flip ${position}`} key={tour.id}> 
            <TourFlip {...tour} 
            handleLeft={handleLeft} handleRight={handleRight} />
          </div>
        })}
      </div>
    </main>
  )
}
