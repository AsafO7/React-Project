import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header"
import { MainContent } from "./MainContent/MainContent"

window.addEventListener("scroll", reveal);

function reveal() {
    let reveals = document.querySelectorAll(".ca-bottom-info")
    let h1Reveals = document.querySelectorAll(".h1-reveal")
    let h3Reveals = document.querySelectorAll(".h3-reveal")

    for(let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight
        let revealTop = reveals[i].getBoundingClientRect().top
        let revealPoint = 150

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add(`ca-bottom-info-active${i+1}`)
        }
    }

    for(let i = 0; i < h1Reveals.length; i++) {
        let windowHeight = window.innerHeight
        let revealTop = h1Reveals[i].getBoundingClientRect().top
        let revealPoint = 100

        if(revealTop < windowHeight - revealPoint) {
            h1Reveals[i].classList.add(`h1-active`)
            h3Reveals[i].classList.add("h3-active")
        }
    }
}

export const MainSite = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0)
    },[pathname])

    return (
        <div className="ca-clone-container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}