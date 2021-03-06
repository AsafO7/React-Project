import { LinearProgress } from '@material-ui/core';
//components
import { Dish } from '../../dish/Dish';
import { useGlobalContext } from '../../../context';

/* 
*) Handle loading and errors - Done
This will be the restaurant home page. It will include:
*) A header with a hero (potentially with a navbar that jumps to a section with a click). - Done
*) A search form that changes the API url and causes a re-render. Done
*) A menu using the free meal API. The menu will include the name and picture of a dish.
    By clicking on the dish, the user will be linked to a page with more info about the dish. Done
*/

export const Recipes = () => {

    const { loading, recipes } = useGlobalContext();
    if(loading) { 
        return <main style={{background: "burlywood", height: "100vh"}}><LinearProgress /></main>
    }

    if(recipes.length < 1) { 
        return <main style={{background: "burlywood", height: "100vh"}}>
            <h1 className="error">No recipe found</h1> 
        </main>
    }
    return (
        <>
            <main style={{background: "burlywood", maxHeight: "100vh"}}>
                <ul className="container">
                {recipes?.map((dish) => {
                    return (
                        <li key={dish.id} className="dish-li"><Dish item={dish} /></li>
                    )
                })}
                </ul>
            </main>
        </>
    )
}