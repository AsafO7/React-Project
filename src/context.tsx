import React, { useState, useContext, useEffect, useCallback } from 'react';



type Props = {
    loading: boolean;
    recipes: DishItemType[];
    mealCategories: Category[];
    currentCategory: string;
    setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const catUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
const catMealUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
const AppContext = React.createContext<Props>({loading: false, recipes: [], mealCategories: [],
  currentCategory: "", setCurrentCategory: useState, setSearchTerm: useState});

export type Category = {
  id: string,
  name: string
}

export type DishItemType = {
    id: number;
    name: string;
    category: string;
    instructions: string;
    image: string;
    // youtubeLink: string;
}

const AppProvider: React.FC = ({ children }) => {

  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [mealCategories, setMealCategories] = useState<Category[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("");
  const [recipes, setRecipes] = useState<DishItemType[]>([]);

  const getCategories = useCallback(async () => {
    setLoading(true)
    try {
      const data = await (await fetch(`${catUrl}`)).json();
      const { categories } = data
      if(categories) {
        const cats: Category[] = categories.map((
          category: {idCategory: string, strCategory: string}) => {
            const {idCategory, strCategory} = category
            return {id: idCategory, name: strCategory}
          })
          setMealCategories(() => cats)
      }
      else {
        setMealCategories([])
      }
      setLoading(false)
    }
    catch(err) {
      setMealCategories([]);
      console.log(err);
      setLoading(false);
    }
  },[])

  const getCategoryDishes = useCallback(async () => {
    if(currentCategory !== "") {
      setLoading(true)
      try {
        const data = await (await fetch(`${catMealUrl}${currentCategory}`)).json();
        const { meals } = data
        if(meals) {
          const dishes: DishItemType[] = meals.map((
            dish: {idMeal: string, strMeal: string, strMealThumb: string}) => {
            const { idMeal, strMeal, strMealThumb } = dish;
            return { id: idMeal, name: strMeal, image: strMealThumb };
          })
          setRecipes(() => dishes)
        }
        else {
          setRecipes([])
        }
        setLoading(false)
      }
      catch(err) {
        setRecipes([]);
        console.log(err);
        setLoading(false);
      }
    }
  },[currentCategory])

  const getDish = useCallback(async () => {
    setLoading(true);
    try {
      const data = await (await fetch(`${url}${searchTerm}`)).json();
      const { meals } = data;
      if(meals) {
          const dishes: DishItemType[] = meals.map((
            dish: {idMeal: string, strMeal: string, strMealThumb: string}) => {
            const { idMeal, strMeal, strMealThumb } = dish;
            return { id: idMeal, name: strMeal, image: strMealThumb };
          })
          setRecipes(dishes);
      }
      else {
          setRecipes([]);
      }
      setLoading(false);
    }
    catch(err) {
      setRecipes([]);
      console.log(err);
      setLoading(false);
    }
  },[searchTerm])

  useEffect(() => {
    // console.log("1")
    getCategories();
  },[getCategories])

  // Calls the function that fetches the data every time searchTerm changes.
  useEffect(() => {
    getDish();
  },[searchTerm, getDish])

  useEffect(() => {
    if(currentCategory !== "") {
      getCategoryDishes()
    }
  },[currentCategory, getCategoryDishes])


  return <AppContext.Provider value={{loading, recipes, mealCategories, currentCategory,
   setCurrentCategory, setSearchTerm}}>
    {children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
