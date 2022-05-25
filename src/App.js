import background from "./images/background.jpg"
import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import Menu from './views/Menu';
import Header from './views/components/Header';
import Footer from "./views/components/Footer";
import Blog from "./views/Blog";
import ErrorPage from "./views/ErrorPage";
import Cocktail from "./views/Cocktail";

function App() {
  return (
    <Router>
    <div className="container">

    
     <Header title="DRINKS LAB" background={background}/>
    <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/about" element={<About/>} />
     <Route exact path="/blog" element={<Blog/>} />
     <Route exact path="/menu" element={<Menu/>} />
     <Route exact path="/menu/:id" element={<Cocktail/>} />
     <Route path="*" element={<ErrorPage/>} />

    </Routes>

    <Footer />
    </div>
    </Router>
  );
}

export default App;
