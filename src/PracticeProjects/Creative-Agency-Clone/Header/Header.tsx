import { Navbar } from "./Navbar/Navbar"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { HeaderContent } from "./Header-Content/HeaderContent";
import { useState } from "react";
import { data } from "./header-data"

export const Header = () => {
    const slides = data.map((item) => item.id)
    const [currentSlideId, setCurrentSlideId] = useState("#slide1")

    const handlePrev = () => {
        let currSlide = document.querySelector(currentSlideId)
        if(slides.indexOf(currentSlideId) === 0) {
            let nextSlide = document.querySelector(`#slide${slides.length}`)
            nextSlide?.classList.add("header-lorem-active")
            currSlide?.classList.remove("header-lorem-active")
            setCurrentSlideId(slides[slides.length - 1])
        }
        else {
            let nextSlide = document.querySelector(`#slide${slides.indexOf(currentSlideId)}`)
            nextSlide?.classList.add("header-lorem-active")
            currSlide?.classList.remove("header-lorem-active")
            setCurrentSlideId(`#slide${slides.indexOf(currentSlideId)}`)
        }
    }

    const handleNext = () => {
        let currSlide = document.querySelector(currentSlideId)
        if(slides.indexOf(currentSlideId) === slides.length - 1) {
            let nextSlide = document.querySelector(slides[0])
            nextSlide?.classList.add("header-lorem-active")
            currSlide?.classList.remove("header-lorem-active")
            setCurrentSlideId(slides[0])
        }
        else {
            let nextSlide = document.querySelector(`#slide${slides.indexOf(currentSlideId) + 2}`)
            nextSlide?.classList.add("header-lorem-active")
            currSlide?.classList.remove("header-lorem-active")
            setCurrentSlideId(`#slide${slides.indexOf(currentSlideId) + 2}`)
        }
    }

    return (
        <main className="header-main" style={{backgroundImage: `url(${data.find((obj) => obj.id === currentSlideId)?.image})`}}>
            <Navbar />
            <div className="header-content-container">
                <span className="ca-left-arrow" onClick={handlePrev}><ArrowBackIosIcon style={{fontSize: "2rem"}}/></span>
                    <HeaderContent currentSlide={currentSlideId}/>
                <span className="ca-right-arrow" onClick={handleNext}><ArrowForwardIosIcon style={{fontSize: "2rem"}}/></span>
            </div>
        </main>
    )
}