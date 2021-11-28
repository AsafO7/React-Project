import { LinearProgress } from '@material-ui/core';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../../../context';
import { TopButton } from '../../TopButton';

/* 
1) fetch the dish using the name. - Done
2) display the rest of the properties. - Done
2.1) handle loading and error. - Done
3) style the page. - Done
4) Fix the instructions so after every "." there's a line-breaker. - Done
5) Maybe add measurements from the API. - Done
*/

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

type DishInfoType = {
    id: string;
    dishName: string;
    image: string;
    category: string;
    instructions: string[];
    ingredients: string[];
    measurements: string[];
}

const makeReadable = (ins: String): string[] => {
    let text = ``;
    let newInstructions: string[] = [];
    for(let i = 0; i < ins.length; i++) {
        if(ins[i] === ".") {
            newInstructions.push(`${text}.`);
            text = ``;
        }
        else { text = `${text}${ins[i]}` }
    }
    return newInstructions;
}

export const DishInfo = () => {
    const { name } = useParams() as any;
    const [loading, setLoading] = useState(false);
    const [dishInfo, setDishInfo] = useState<DishInfoType>();
    const { setSearchTerm } = useGlobalContext();

    const getDishInfo = useCallback(async () => {
        try {
            const response = await fetch(`${url}${name}`);
            const data = await response.json();
            if(data.meals) {   
                const {idMeal: id, strMeal: dishName, strMealThumb: image, strCategory: category,
                strInstructions: instructionsRaw, strIngredient1, strIngredient2,
                strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7,
                strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12,
                strIngredient13, strIngredient14, strIngredient15, strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20, strMeasure1, strMeasure2, strMeasure3, strMeasure4,
                strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11,
                strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18,strMeasure19, strMeasure20 } = data.meals[0];

                const ingredients: string[] = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,
                    strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10,
                    strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15,
                    strIngredient16, strIngredient17, strIngredient18, strIngredient19, strIngredient20];

                const measurements: string[] = [strMeasure1, strMeasure2, strMeasure3, strMeasure4,
                strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11,
                strMeasure12, strMeasure13, strMeasure14, strMeasure15, strMeasure16, strMeasure17, strMeasure18,strMeasure19, strMeasure20];

                const instructions = makeReadable(instructionsRaw);
                const newDish: DishInfoType = { id, dishName, image, category, instructions, ingredients, measurements };
                setDishInfo(newDish);
            }
            else { setDishInfo(undefined); }
            setLoading(false);
        }
        catch(err) {
            console.log(err);
            setLoading(false);
        }
    },[name])

    useEffect(() => {
        setLoading(true);
        getDishInfo();
  },[name, getDishInfo])

    if(loading) { return <LinearProgress /> }
    if(!dishInfo) { return <h1>No such recipe exists</h1> }

    const { id, dishName, image, category, instructions, ingredients, measurements } = dishInfo;

    return (
        
        <article className="dish">
            <TopButton />
            <img src={image} alt={dishName} className="dish-img"></img>
            <div className="info-container">
                <span className="dish-name">
                    <u>Dish name:</u> {dishName}
                </span>
                <span className="dish-cat"><u>Category:</u> {category}</span>
                <section className="ing-measure-container">
                    <section className="dish-ing"><u>Ingredients:</u>
                            <ul>
                                {ingredients.map((ing, index) => {
                                    if(ing) { return <li key={id+index} className="ing"> {ing} </li> }
                                    return null;
                                })}
                            </ul>
                    </section>
                    <section className="dish-measure"><u>Measurements:</u>
                            <ul>
                                {measurements.map((measure, index) => {
                                    if(measure) { return <li key={id+index} className="measure">
                                        {measure} </li> }
                                    return null;
                                })}
                            </ul>
                    </section>
                </section>
            </div>
            <p className="dish-ins"><u>Instructions:</u><br/>
                { instructions.map((line, index) => {
                    return <span key={index}> {line}<br/></span>
                })}
            </p>
            <Link to="/disheslist" className="back-btn" onClick={() => setSearchTerm("")}>Back to list</Link>
        </article>
    )
}