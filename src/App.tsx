import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/main-page/Home';
import { About } from './components/about/About';
import { DishesList }  from './components/dish-list/DishesList';
import { DishInfo } from './components/dish/dish-info/DishInfo';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/disheslist">
          <DishesList />
        </Route>
        <Route path="/dish/:name/">
          <DishInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
