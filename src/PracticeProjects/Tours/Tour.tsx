import React, { useState } from 'react'

type TourInfo = {
    id: string,
    image: string,
    title: string,
    price: string,
    description: string,
    handleDel: (id: string, e: React.MouseEvent) => void
}

export const Tour: React.FC<TourInfo> = ({id, image, title, price, description, handleDel} ) => {
    const [readMore, setReadMore] = useState(false)
    const btnText = React.useRef<any>()

    function handleRead(e: React.MouseEvent) {
        e.preventDefault()
        setReadMore((prevState) => { return !prevState })
        btnText.current.textContent === "Read More" ? 
        btnText.current.textContent = "Show Less" : btnText.current.textContent = "Read More"
    }

    return (
    <article className='tour'>
      <img src={image} alt="pic here" className='tour-img'></img>
      <div className='tour-title-price'>
        <span>{title}</span>
        <span className='tour-price'>{price}</span>
      </div>
      <p className='tour-desc'>{readMore ? description : `${description.substring(0, 200)}... `}
      <button className="tour-read-more-btn" ref={btnText} onClick={(e) => handleRead(e)}>Read More</button></p>
      <button className='not-int-btn' onClick={(e) => handleDel(id, e)}>Not Interested</button>
    </article>
  )
}
