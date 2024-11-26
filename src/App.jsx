//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import SlideMenu from './components/SlideMenu';
import PopularDishes from './components/PopularDishes';
import DishDetail from './components/DishDetail';
import NewArticles from './components/NewArticles';
import TileGrid from './components/TileGrid';
import UserProfile from './components/UserProfile';
import SearchPage from './components/SearchPage';
import CategoryPage from './components/CategoryPage';
import ContactPage from './components/ContactPage';
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
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </div>
  </Router>
  )
}

export default App
