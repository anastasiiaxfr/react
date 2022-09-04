import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/services/" exact element={<Services/>}></Route>
          <Route path="/products/" exact element={<Products/>}></Route>
          <Route path="/sign-up/" exact element={<SignUp/>}></Route>
        </Routes>
        <Footer></Footer>
    </Router>
     
    </>
  );
}

export default App;
