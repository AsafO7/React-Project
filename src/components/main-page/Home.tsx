import { cardData } from "../../data";
import { Card } from "../main-page/card/Card";

/* 
2) In this page, create 2 cards: one for the vanilla js project and one for the restaurant project. - Done
3) Link the cards to the project pages.
4) Style this page. Done
*/

export const Home = () => {
    return (
        <main className="main-container">
            {/* <header className="main-header"> */}
                {/* <div className="trans-bg"> */}
                    {/* <img src="https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg" alt="pic"
                        className="square"></img> */}
                {/* </div> */}
            {/* </header> */}
            <section className="skills">
                
                <div className="about">
                    <h2 className="about-header">About Me</h2>
                    <p className="about-me">My name is Asaf Ovadya, in 1 year I'll graduate from The
                        Open University of Israel with a B.Sc in Computer Science
                        and I'm looking for my first job as a Front-End Developer!</p>
                    {/* <div className="square">Future picture here</div> */}
                </div>
                <div className="skills-container">
                    <h2 className="skill-header">My Skills</h2>
                    <div className="icons">
                        <img className="icon" src="https://img.icons8.com/color/144/000000/html-5--v2.png" alt="html"
                        loading="lazy"/>
                        <img className="icon" src="https://img.icons8.com/color/144/000000/css3.png" alt="css"
                        loading="lazy"/>
                        <img className="icon" src="https://img.icons8.com/color/144/000000/javascript--v1.png" alt="js"
                        loading="lazy"/>
                        <img className="icon" src="https://img.icons8.com/color/144/000000/react-native.png" alt="react"
                        loading="lazy"/>
                    </div>
                    {/* <h2 className="cards-title">My Projects</h2> */}
                </div>
            </section>
            <section className="projects-container">
                    <h2 className="cards-title">My Projects</h2>
                    <section className="cards">
                        {cardData.map((item) => {
                            const { id, image, title, description, link } = item;
                            return <div key={id} className="card">
                                <Card image={image} title={title} description={description} link={link}/>
                            </div>
                        })}
                    </section>
            </section>
        </main>
    )
}