import React from "react";
import { useGlobalContext } from "../../../context";

/* 
1) Style this component. - Done
*/

export const SearchForm = () => {
    const searchValue = React.useRef<any>();
    const { setSearchTerm } = useGlobalContext();

    // When reloading the page, focus on the search input.
    React.useEffect(() => {
        searchValue.current?.focus();
    },[]);

    // Prevents a re-render when pressing the "Enter" key.
    const handleSubmit = (e: any) => {
        e.preventDefault();
    }

    const searchRecipe = () => {
        if(searchValue.current?.value) {
            setSearchTerm(searchValue.current?.value);
        }
        else {
            setSearchTerm("");
        }
    }

    return (
        <section className="search-container">
            <form action="" className="search-form" onSubmit={handleSubmit}>
                <div className="form-container">
                    <label htmlFor="name">Search a recipe</label>
                    <input type="text" id="name" ref={searchValue} onChange={searchRecipe} />
                </div>
            </form>
        </section>
    )
}