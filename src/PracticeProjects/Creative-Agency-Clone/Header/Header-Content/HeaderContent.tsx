import { data } from "../header-data"

type slide = {
    currentSlide: string
}

export const HeaderContent = ({currentSlide}: slide) => {

    return (
        <div className="slide-container">
            {data.map((item) => {
                return <div key={item.id} className={(currentSlide === item.id) ? "header-lorem header-lorem-active" : "header-lorem"} id={item.id}>
                    <h1>{item.h1}</h1>
                    <h3>{item.h3}</h3>
                </div>
            })}
        </div>
    )
}