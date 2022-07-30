import { LinearProgress } from '@material-ui/core';
//components
import { Dish } from '../../dish/Dish';
import { useGlobalContext } from '../../../context';

export const Recipes = () => {

    const { loading, recipes } = useGlobalContext();
    if(loading) { 
        return <main style={{background: "burlywood", height: "100vh"}}><LinearProgress /></main>
    }

    if(recipes.length < 1) { 
        return <main style={{background: "burlywood", height: "100vh"}}>
            <h1 className="error">No recipe found, change input or refresh the page</h1> 
        </main>
    }
    return (
        <>
            <main style={{background: "burlywood", flexGrow: 1}}>
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