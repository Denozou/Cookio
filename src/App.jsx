//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SlideMenu from './components/SlideMenu';
import PopularDishes from './components/PopularDishes';
import DishDetail from './components/DishDetail';
import NewArticles from './components/NewArticles';
import TileGrid from './components/TileGrid';
function App() {
  
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SlideMenu />
              <PopularDishes />
              <NewArticles /> 
              <TileGrid/>
            </>
          }
        />
        <Route path="/dish/:id" element={<DishDetail />} />

      </Routes>
    </div>
  </Router>
  )
}

export default App
