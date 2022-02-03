import { Link } from "react-router-dom";

/*
1) Make a card component which includes: an image, a title, a paragraph, and a link. - Done
2) Write the data in data.js. - Done
3) Find a way to link this page with the Mini-Games project.
*/

type Props = {
    image: string;
    title: string;
    description: string;
    link: string;
}

const returnLinks = (title: string, link: string) => {
    if(title === "Mini-Games") { return <a className="linkBtn" href={link}>Check out</a> }
    else { return <Link className="linkBtn" to={link}>Check out</Link> }
}


export const Card: React.FC<Props> = ({image, title, description, link}) => {
    return (
        <article className="card-container">
            <img src={image} alt={image} className="image"></img>
            <h2 className="title">{title}</h2>
            <h4 className="desc">{description}</h4>
            <div className="linkBtn-container">
                { returnLinks(title, link) }
            </div>
        </article>
    )
}