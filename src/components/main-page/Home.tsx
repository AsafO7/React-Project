// import { Projects } from "../projects/Projects"
// import { Casino } from "@material-ui/icons"
import { Casino, RestaurantMenu } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
                    <Link to="/contact"><button className="contact">Contact me</button></Link>
                </div>
                <div className="my-image">
                    {/* <h2 className="skill-header">Skills</h2>
                    <div className="icons">
                        <img className="icon" src="https://img.icons8.com/color/144/000000/html-5--v2.png" alt="html"
                        loading="lazy"/>
                        <img className="icon" src="https://img.icons8.com/color/144/000000/css3.png" alt="css"
                        loading="lazy"/>
                        <img className="icon" src="https://img.icons8.com/color/144/000000/javascript--v1.png" alt="js"
                        loading="lazy"/>
                        <img className="icon" src="https://img.icons8.com/color/144/000000/react-native.png" alt="react"
                        loading="lazy"/>
                    </div> */}
                    Future picture here
                </div>
            </section>
            <section className="projects">
                <div className="project">
                    <Casino fontSize="large" color="action"/>
                    <h3>Mini games project</h3>
                    <h4>Vanilla Javascript</h4>
                    <a href="https://small-mini-games-project.netlify.app/" className="pbtn">Check out</a>
                </div>
                <div className="project">
                    <RestaurantMenu fontSize="large" color="action"/>
                    <h3>Recipe menu project</h3>
                    <h4>React and Typescript</h4>
                    <Link to="/disheslist" className="pbtn">Check out</Link>
                </div>
                <div className="project">
                    <RestaurantMenu fontSize="large" color="action"/>
                    <h3>Recipe menu project</h3>
                    <h4>React and Typescript</h4>
                    <Link to="#" className="pbtn">Check out</Link>
                </div>
            </section>
        </main>
    )
}