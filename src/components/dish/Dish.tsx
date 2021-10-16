import { Link } from "react-router-dom";
import { DishItemType } from "../../context";

/* 
1) Style the component.
*/

type Props = {
    item: DishItemType;
};

export const Dish: React.FC<Props> = ({ item }) => {
    const { name, image } = item;
    return (
        <article className="item">
            <img src={image} alt={name} className="item-img"></img>
            <div className="name">
                <Link to={`/dish/${name}`} className="info-link"><u>Dish name:</u> {name}</Link>
            </div>
        </article>
    )
}