import React, { useState } from "react";
import "./CategoryPage.css";
import DishTile from './DishTile';


//замінити на запит до бекенду
const dishes = [
  {
    id: 1,
    name: "The Borscht",
    description:
      "Borscht is a rich beetroot soup with broth, cabbage, potatoes and carrots. Served hot with sour cream and fresh herbs, it creates a rich aroma and taste.",
    image: "https://via.placeholder.com/300", 
    time: "2 hour 30 min",
    rating: 4.5,
  },
  {
    id: 2,
    name: "The Lasagne",
    description:
      "Lasagne is a layered Italian dish with thin sheets of dough, juicy meat sauce, tomatoes and melted cheese. Served hot, with a rich taste and an appetizing crust.",
    image: "https://via.placeholder.com/300", 
    time: "40 min",
    rating: 5,
  },
  {
    id: 3,
    name: "Caesar Salad",
    description:
      "Caesar salad is a salad with crisp romaine lettuce, chicken, croutons and Parmesan cheese, dressed with a tangy garlic-anchovy dressing.",
    image: "https://via.placeholder.com/300",
    time: "30 min",
    rating: 4.8,
  },
];
//dropdown menu з категоріями
function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Category");
  const [selectedDishes, setSelectedDishes] = useState("Dishes");
  const [selectedIngredients, setSelectedIngredients] = useState("Ingredients");
  const [selectedCuisines, setSelectedCuisines] = useState("Cuisines");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleDishesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDishes(e.target.value);
  };

  const handleIngredientsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIngredients(e.target.value);
  };

  const handleCuisinesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCuisines(e.target.value);
  };

  return (
    <div className="category-page">
      <h1 className="category-title">A diverse list of categories just for you</h1>
      <div className="filters">  
        <select value={selectedCategory} onChange={handleCategoryChange}> 
          <option value="Category">Category</option> 
          <option value="Soups">Soups</option>
          <option value="Salads">Salads</option>
        </select>
        <select value={selectedDishes} onChange={handleDishesChange}>
          <option value="Dishes">Dishes</option>
          <option value="Main Course">Main Course</option>
          <option value="Side Dish">Side Dish</option>
        </select>
        <select value={selectedIngredients} onChange={handleIngredientsChange}>
          <option value="Ingredients">Ingredients</option>
          <option value="Chicken">Chicken</option>
          <option value="Vegetarian">Vegetarian</option>
        </select>
        <select value={selectedCuisines} onChange={handleCuisinesChange}>
          <option value="Cuisines">Cuisines</option>
          <option value="Italian">Italian</option>
          <option value="French">French</option>
        </select>
        <button className="filter-button">Select a recipe</button>
      </div>
      <div className="recipe-list">
        {dishes.map((dish) => (
            <DishTile
                key={dish.id}
                id={dish.id}
                image={dish.image}
                name={dish.name}
                description={dish.description}
                time={dish.time}
            />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
