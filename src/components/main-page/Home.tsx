import { Link } from "react-router-dom";
import { Projects } from "../projects/Projects";

/* 
2) In this page, create 2 cards: one for the vanilla js project and one for the restaurant project. - Done
3) Link the cards to the project pages.
4) Style this page. Done
*/



export const Home = () => {
    return (
        <main className="main-container">
                <section className="skills">
                    <div className="about">
                        <h3 className="about-header">My name is Asaf Ovadya</h3>
                        <p className="about-me">C.S student of The
                            Open University of Israel.
                        </p>
                        <h4>I'm looking for my first job as a Front-end developer.</h4>
                        <Link to="/contact" className="contact"><button className="contact">Contact me</button></Link>
                    </div>
                    <img className="my-image" src="https://i.ibb.co/kq16mZq/e.png" alt=""></img>
                </section>
                <Projects />
        </main>
    )
}