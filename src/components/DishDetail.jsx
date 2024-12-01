import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
//import './DishDetail.css';
import SpaghettiCarbonara from '../assets/carbonara.jpg';
import ChickenTikkaMasala from '../assets/Chicken-Tikka-Masala.jpg';
import AssortedSushiPlatter from '../assets/Assorted-Sushi-Platter.jpg';

const dishes = [
    {
      id: 'spaghetti-carbonara',
      image: SpaghettiCarbonara,
      name: 'Spaghetti Carbonara',
      description:
        'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Rich and creamy without using cream!',
      time: '30 mins',
      ingredients: [
        '200g spaghetti',
        '100g pancetta',
        '2 large eggs',
        '50g Pecorino cheese',
        '50g Parmesan',
        'Black pepper',
        'Salt',
      ],
      steps: [
        'Cook spaghetti in salted boiling water until al dente.',
        'Fry pancetta until crispy.',
        'Beat eggs in a bowl, then mix in grated Pecorino and Parmesan.',
        'Drain spaghetti and combine with pancetta and its fat.',
        'Remove from heat and quickly mix in the egg and cheese mixture.',
        'Season with black pepper and serve immediately.',
      ],
    },
    {
      id: 'chicken-tikka-masala',
      image: ChickenTikkaMasala,
      name: 'Chicken Tikka Masala',
      description:
        'Tender chunks of grilled chicken enveloped in a spiced creamy tomato sauce. A favorite in Indian cuisine.',
      time: '45 mins',
      ingredients: [
        '500g chicken breast',
        '200g yogurt',
        '2 tbsp tikka masala paste',
        '1 onion, chopped',
        '2 garlic cloves, minced',
        '1 tbsp ginger, grated',
        '400g canned tomatoes',
        '200ml cream',
        '2 tbsp vegetable oil',
        'Salt',
        'Fresh cilantro for garnish',
      ],
      steps: [
        'Marinate chicken in yogurt and tikka masala paste for at least 1 hour.',
        'Grill or broil the marinated chicken until cooked through.',
        'Heat oil in a pan and sauté onions until translucent.',
        'Add garlic and ginger, cook for another minute.',
        'Pour in canned tomatoes and simmer for 10 minutes.',
        'Stir in cream and cooked chicken, simmer for 15 minutes.',
        'Season with salt and garnish with fresh cilantro before serving.',
      ],
    },
    {
      id: 'assorted-sushi-platter',
      image: AssortedSushiPlatter,
      name: 'Assorted Sushi Platter',
      description:
        'A delightful assortment of fresh sushi rolls, nigiri, and sashimi, perfect for any occasion.',
      time: '60 mins',
      ingredients: [
        '2 cups sushi rice',
        '3 cups water',
        '1/4 cup rice vinegar',
        '2 tbsp sugar',
        '1 tsp salt',
        'Assorted fresh fish (salmon, tuna)',
        'Nori sheets',
        'Vegetables (cucumber, avocado)',
        'Soy sauce',
        'Wasabi',
        'Pickled ginger',
      ],
      steps: [
        'Rinse sushi rice until water runs clear, then cook with water.',
        'Mix rice vinegar, sugar, and salt, then fold into cooked rice. Let it cool.',
        'Slice fresh fish and vegetables into thin strips.',
        'Place a nori sheet on a bamboo mat, spread rice evenly, leaving a small margin.',
        'Add fish and vegetables in a line, then roll tightly using the mat.',
        'Slice the roll into bite-sized pieces.',
        'Arrange nigiri and sashimi on a platter, garnish with pickled ginger and wasabi.',
      ],
    },
  ];


export default function DishDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
  
    const dish = dishes.find((dish) => dish.id === id);
  
    if (!dish) {
      return (
        <div className="dish-detail">
          <p>Dish not found.</p>
          <button onClick={() => navigate(-1)} className="back-button">
            Go Back
          </button>
        </div>
      );
    }
  return (
    <div className="dish-detail">
      <h2 className="dish-detail__name">{dish.name}</h2>
      <img src={dish.image} alt={dish.name} className="dish-detail__image" />
      <p className="dish-detail__description">{dish.description}</p>

      <div className="dish-detail__section">
        <h3>Ingredients</h3>
        <ul>
          {dish.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="dish-detail__section">
        <h3>Step-by-Step Guide</h3>
        <ol>
          {dish.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <button onClick={() => navigate(-1)} className="back-button">
        Go Back
      </button>
    </div>
  )
}
