import { Link } from "react-router-dom";
import { cardData } from "../../data";

export const Projects = () => {
    return <main className="projects">
            {cardData.map((item) => {
                const { id, img, texth3, texth4, link } = item;
                return <div key={id} className="project" id={`proj${id}`}>
                    {id % 2 === 0 && <img src={img} className="project-img" alt="even-img"></img>}
                    <div className="project-info">
                        {/* {icon} */}
                        <h3>{texth3}</h3>
                        <h4>{texth4}</h4>
                        <Link to={link} className="pbtn">View project</Link>
                    </div>
                    {id % 2 === 1 && <img src={img} alt="odd-img" className="project-img"></img>}
                </div>
            })}
    </main>
}