import React from "react";
import { useGlobalContext } from "../../../context";


export const SearchForm = () => {
    const searchValue = React.useRef<any>();
    const { setSearchTerm, mealCategories, setCurrentCategory, currentCategory } = useGlobalContext();

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
            setCurrentCategory("")
            setSearchTerm((prevSearch) => {
                if(prevSearch === "") return searchValue.current?.value
                if(prevSearch.charAt(0) === ((searchValue.current?.value).charAt(0)).toUpperCase()) {
                    if((searchValue.current?.value).length > 1)
                        return ((searchValue.current?.value).charAt(0)).toLowerCase() + (searchValue.current?.value).slice(1)
                    else {
                        return ((searchValue.current?.value).charAt(0)).toLowerCase()
                    }
                }
                else if((searchValue.current?.value).length > 1){
                    return ((searchValue.current?.value).charAt(0)).toUpperCase() + (searchValue.current?.value).slice(1)
                }
                else {
                    return ((searchValue.current?.value).charAt(0)).toUpperCase()
                }
            });
        }
        else {
            setSearchTerm("");
        }
    }

    return (<div>
            <section className="search-container">
                <form action="" className="search-form" onSubmit={handleSubmit}>
                    <div className="form-container">
                        <label htmlFor="name">Search a recipe</label>
                        <input type="text" id="name" ref={searchValue} onChange={searchRecipe} />
                    </div>
                </form>
            </section>
            <section className="cat-buttons">
                {mealCategories.map((category) => {
                    const {id, name} = category
                    // console.log(currentCategory + 5)
                    return <button key={id} onClick={() => {
                        searchValue.current.value = ""
                        setCurrentCategory(name)
                    }} 
                    className={currentCategory === name ? "cat-btn active" : "cat-btn"}>
                        {name}</button>
                })}
            </section>
        </div>
    )
}