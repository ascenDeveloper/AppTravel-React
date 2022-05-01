import React from 'react';
import Navbar from './components/Navbar.jsx';
import { BrowserRouter as  Router, Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.jsx';
import Services from './components/pages/Services.jsx';
import Products from './components/pages/Products.jsx';
import SignUp from './components/pages/SignUp.jsx';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/products' element={<Products />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
