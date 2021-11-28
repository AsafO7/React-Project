import { cardData } from "../../data";
import { Card } from "../main-page/card/Card";

export const Projects = () => {
    return <main className="projects-container">
                <h2 className="cards-title">My Projects</h2>
                <section className="cards">
                    {cardData.map((item) => {
                        const { id, image, title, description, link } = item;
                        return <div key={id} className="card">
                            <Card image={image} title={title} description={description} link={link}/>
                        </div>
                    })}
                </section>
        </main>
}