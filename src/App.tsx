import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import { Navbar } from './components/navbar/Navbar';
import { Home } from './components/main-page/Home';
// import { Projects } from './components/projects/Projects';
import { DishesList }  from './components/dish-list/DishesList';
import { DishInfo } from './components/dish/dish-info/DishInfo';
import { Calculator } from './components/Calculator/Calculator.js';
import { Calendar } from './components/Calendar/Calendar';

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
          <Link to="/" className='home-btn home-btn-dishlist'>Home</Link>
          <DishesList />
        </Route>
        <Route path="/dish/:name/">
          <Link to="/" className='home-btn'>Home</Link>
          <DishInfo />
        </Route>
        <Route path="/calculator">
          <Link to="/" className='home-btn'>Home</Link>
          <Calculator />
        </Route>
        <Route path="/calendar">
          <Link to="/" className='home-btn'>Home</Link>
          <Calendar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
