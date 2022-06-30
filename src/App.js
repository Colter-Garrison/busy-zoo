import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link } from 'react-router-dom';
import './App.css';
import Admin from './Admin';
import HomePage from './HomePage';

function App() {

  return (
    <Router>
      <Link to='/Admin'>Admin Page</Link>
      <Link to='/'>Home Page</Link> 
      <Switch>
        <Route exact path='/Admin'>
          <Admin />
        </Route>
      </Switch>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;