import './App.css';
import React from 'react'; 
import Navbar from "./components/Navbar/Navbar";

import 'react-awesome-slider/dist/styles.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Communities from './components/pages/Communities'
import ComingSoon from './components/pages/ComingSoon'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/communities' exact component={Communities} />
          <Route path='/comingsoon' exact component={ComingSoon} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
