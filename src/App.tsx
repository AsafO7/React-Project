import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/main-page/Home';
// import { Projects } from './components/projects/Projects';
import { DishesList }  from './components/dish-list/DishesList';
import { DishInfo } from './components/dish/dish-info/DishInfo';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/projects">
          <Projects />
        </Route> */}
        <Route path="/disheslist">
          <Navbar />
          <DishesList />
        </Route>
        <Route path="/dish/:name/">
          <Navbar />
          <DishInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
