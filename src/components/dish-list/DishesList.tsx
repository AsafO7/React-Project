import { Recipes } from '../dish-list/recipes/Recipes';
import { SearchForm } from '../dish-list/search-form/SearchForm';
import { Hero } from '../dish-list/hero/Hero';
import { TopButton } from '../TopButton';
// import { Link } from 'react-router-dom';

export const DishesList = () => {
  return (
    <main>
        <header>
            {/* <Link to="/" className='home-btn home-btn-dishlist'>Home</Link> */}
            <TopButton />
            <Hero />
        </header>
      <SearchForm />
      <Recipes />
    </main>
  )
}

export default DishesList;
