import { Recipes } from '../dish-list/recipes/Recipes';
import { SearchForm } from '../dish-list/search-form/SearchForm';
import { Hero } from '../dish-list/hero/Hero';
import { TopButton } from '../TopButton';

export const DishesList = () => {
  return (
    <main>
        <header>
            <TopButton />
            <Hero />
        </header>
      <SearchForm />
      <Recipes />
    </main>
  )
}

export default DishesList;
