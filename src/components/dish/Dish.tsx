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
        <div className="dish-container">
            <Link to={`/dish/${name}`} className="item">
                {/* <article className="item"></article> */}
                <img src={image} alt="" className="item-img"></img>
            </Link>
            <div className="name">
                {name}
            </div>
        </div>
    )
}