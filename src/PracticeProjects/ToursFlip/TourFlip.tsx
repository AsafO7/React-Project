import React, { useState } from 'react'

type TourInfo = {
    id: string,
    image: string,
    title: string,
    price: string,
    description: string,
    handleLeft: () => void,
    handleRight: () => void
}

export const TourFlip: React.FC<TourInfo> = ({id, image, title, price, description, handleLeft, handleRight}) => {
    const [readMore, setReadMore] = useState(false)
    const btnText = React.useRef<any>()
    const curTour = React.useRef<any>()

    function handleRead(e: React.MouseEvent) {
        e.preventDefault()
        setReadMore((prevState) => { return !prevState })
        btnText.current.textContent === "Read More" ? 
        btnText.current.textContent = "Show Less" : btnText.current.textContent = "Read More"
    }

    return (
    <article style={{display: "flex", alignItems: "center", flexDirection: "column"}} ref={curTour}>
      <img src={image} alt="pic here" className='tour-img'></img>
      <div className='tour-title-price'>
        <span>{title}</span>
        <span className='tour-price'>{price}</span>
      </div>
      <div className="month-btn-container">
        <button className="prev-month-btn" onClick={() => handleLeft()}></button>
        <button className="next-month-btn" onClick={() => handleRight()}></button>
      </div>
      <p className='tour-desc'>{readMore ? description : `${description.substring(0, 200)}... `}
      <button className="tour-read-more-btn" ref={btnText} onClick={(e) => handleRead(e)}>Read More</button></p>
      {/* <button className='not-int-btn' onClick={(e) => handleDel(id, e)}>Not Interested</button> */}
    </article>
  )
}
