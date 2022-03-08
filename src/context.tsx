import React, { useState, useContext, useEffect, useCallback } from 'react';



type Props = {
    loading: boolean;
    recipes: DishItemType[];
    setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}
let setSearchTerm = useState;
let recipes: DishItemType[] = [];

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext<Props>({loading: false, recipes, setSearchTerm});


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
  const [recipes, setRecipes] = useState<DishItemType[]>([]);

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

  // Calls the function that fetches the data every time searchTerm changes.
  useEffect(() => {
    getDish();
  },[searchTerm, getDish])

  return <AppContext.Provider value={{loading, recipes, setSearchTerm}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
