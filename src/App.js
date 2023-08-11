import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {

  return (
      <Router>
        <Nav/>
          <Switch>
              <Route exact path='/'>
                  <Home/>
              </Route>
              <Route path='/Projects'>
                  <Projects/>
              </Route>
              <Route path='/About'>
                  <About/>
              </Route>
          </Switch>
      </Router>

  );
}

export default App;
