import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import OfferedServices from './components/pages/OfferedServices'
import ContactUs from './components/pages/ContactUs'
import Home from './components/pages/Home'
import ServicePricing from './components/pages/ServicePricing'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import UrnGallery from './components/pages/UrnGallery'
import Facility from './components/pages/Facility';
import FAQ from './components/pages/FAQ';
import About from './components/pages/About';
import Tributes from './components/pages/Tributes';


function App() {
  return (
    <div className="background">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/'exact component={Home} />
          <Route path='/services'exact component={Services} />
          <Route path='/offeredServices'exact component={OfferedServices} />
          <Route path='/contact-us'exact component={ContactUs} />
          <Route path='/servicePricing'exact component={ServicePricing} />
          <Route path='/products'exact component={Products} />
          <Route path='/urnGallery'exact component={UrnGallery} />
          <Route path='/facility'exact component={Facility} />
          <Route path='/faq'exact component={FAQ} />
          <Route path='/about-us'exact component={About} />
          <Route path='/pet-tributes'exact component={Tributes} />
        </Switch> 
      </Router>
      <Footer />
    </div>
  );
}

export default App;
