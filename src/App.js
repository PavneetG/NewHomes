import './App.css';
import React from 'react'; 
import Navbar from "./components/Navbar/Navbar";

import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Communities from './components/pages/Communities'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exect component={Home} />
          <Route path='/communities' component={Communities} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
