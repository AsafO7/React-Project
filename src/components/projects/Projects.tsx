import { Link } from "react-router-dom";
import { cardData } from "../../data";

export const Projects = () => {
    return <main className="projects">
            {cardData.map((item) => {
                const { id, icon, texth3, texth4, link } = item;
                return <div key={id} className="project" id={`proj${id}`}>
                    {/* <Card image={image} title={title} description={description} link={link}/> */}
                    {icon}
                    <h3>{texth3}</h3>
                    <h4>{texth4}</h4>
                    {id === 1 && 
                    <a href={link} className="pbtn">Check out</a>}
                    {id > 1 && 
                    <Link to={link} className="pbtn">Check out</Link>}
                </div>
            })}
    </main>
}