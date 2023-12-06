import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import FoodMenu from './FoodMenu';
import DrinkMenu from './DrinkMenu';
import AddItem from './AddItem';
import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/snacks" component={() => <FoodMenu type="snacks" />} />
          <Route path="/drinks" component={() => <DrinkMenu type="drinks" />} />
          <Route path="/add" component={AddItem} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;