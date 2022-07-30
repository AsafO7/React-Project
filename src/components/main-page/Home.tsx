import { Projects } from "../projects/Projects";
import { About } from "./About";

window.addEventListener("scroll", reveal);

function reveal() {
    let reveals = document.querySelectorAll(".project")

    for(let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight
        let revealTop = reveals[i].getBoundingClientRect().top
        let revealPoint = 150

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active")
        }
        else {
            reveals[i].classList.remove("active")
        }
    }
}

export const Home = () => {
    return (
        <main className="main-container">
            <About />
            <Projects />
        </main>
    )
}