import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Consulting from './components/pages/Consulting'
import ContactUs from './components/pages/ContactUs'
import Home from './components/pages/Home'
import Marketing from './components/pages/Marketing'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import SignUp from './components/pages/SignUp'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/'exact component={Home} />
      <Route path='/services'exact component={Services} />
      <Route path='/consulting'exact component={Consulting} />
      <Route path='/contact-us'exact component={ContactUs} />
      <Route path='/marketing'exact component={Marketing} />
      <Route path='/products'exact component={Products} />
      <Route path='/sign-up'exact component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
