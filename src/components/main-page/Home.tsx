import { Projects } from "../projects/Projects";
import { About } from "./About";


export const Home = () => {
    return (
        <main className="main-container">
                <About />
                <Projects />
        </main>
    )
}