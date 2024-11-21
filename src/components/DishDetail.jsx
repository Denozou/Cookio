import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaShareAlt, FaHeart } from 'react-icons/fa'; // Importing share and heart icons
import './DishDetail.css';

const mockData = {
    'spaghetti-carbonara': {
        name: 'Spaghetti Carbonara',
        image: 'https://via.placeholder.com/800x400',
        description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
        date: '2024-11-15',
        author: 'John Sitch',
        ingredients: ['200g spaghetti', '100g pancetta', '2 eggs', '50g Parmesan'],
        steps: [
            {
                image: 'https://via.placeholder.com/420x280',
                heading: 'Step 1',
                description: 'Cook spaghetti in salted boiling water until al dente.',
            },
            {
                image: 'https://via.placeholder.com/420x280',
                heading: 'Step 2',
                description: 'Fry pancetta until crispy.',
            },
        ],
    },
    'chicken-tikka-masala': {
        name: 'Chicken Tikka Masala',
        image: 'https://via.placeholder.com/800x400',
        description: 'Tender chunks of grilled chicken enveloped in a spiced creamy tomato sauce.',
        date: '2024-11-16',
        author: 'Jane Doe',
        ingredients: ['500g chicken', '200g yogurt', '2 tbsp tikka paste', '1 onion'],
        steps: [
            {
                image: 'https://via.placeholder.com/420x280',
                heading: 'Step 1',
                description: 'Marinate chicken in yogurt and tikka paste.',
            },
        ],
    },
    'assorted-sushi-platter': {
        name: 'Assorted Sushi Platter',
        image: 'https://via.placeholder.com/800x400',
        description: 'A delightful assortment of fresh sushi rolls, nigiri, and sashimi.',
        date: '2024-11-17',
        author: 'Emily Carter',
        ingredients: ['2 cups sushi rice', '1 sheet nori', 'Fresh fish', 'Soy sauce'],
        steps: [
            {
                image: 'https://via.placeholder.com/420x280',
                heading: 'Step 1',
                description: 'Prepare the sushi rice and slice the fish.',
            },
            {
                image: 'https://via.placeholder.com/420x280',
                heading: 'Step 2',
                description: 'Roll the sushi with the nori sheet and fillings.',
            },
        ],
    },
};

export default function DishDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [dish, setDish] = useState(null);

    useEffect(() => {
        const fetchDishData = async () => {
            try {
                const data = mockData[id];
                if (!data) throw new Error('Dish not found');
                setDish(data);
            } catch (error) {
                console.error(error.message);
                navigate('/'); // Redirect to home if the dish is not found
            }
        };

        fetchDishData();
    }, [id, navigate]);

    if (!dish) return <p>Loading...</p>;

    return (
        <div className="dish-detail">
            <div className="container">
                <h1 className="dish-detail__name">{dish.name}</h1>
                <div className="dish-detail__meta">
                    <span className="dish-detail__date">{new Date(dish.date).toLocaleDateString()}</span>
                    <span className="dish-detail__author">{dish.author}</span>
                </div>
                <div className="dish-detail__buttons">
                    <button className="dish-detail__share">
                        <FaShareAlt className="icon" />
                        <span>Share</span>
                    </button>
                    <button className="dish-detail__save">
                        <FaHeart className="icon" />
                        <span>Save</span>
                    </button>
                </div>
                <img src={dish.image} alt={dish.name} className="dish-detail__image" />

                <div className="description">
                    <h2 className="description__title">Description</h2>
                    <p className="description__text">{dish.description}</p>
                </div>

                <div className="ingredients-section">
                    <h2 className="ingredients-section__title">Ingredients</h2>
                    <ul className="ingredients">
                        {dish.ingredients.map((item, index) => (
                            <li className="ingredients__item" key={index}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="method-section">
                    <h2 className="method-section__title">Steps</h2>
                    <div className="method">
                        {dish.steps.map((step, index) => (
                            <div className="method__step" key={index}>
                                <img src={step.image} alt={step.heading} className="method__image" />
                                <h3 className="method__heading">{step.heading}</h3>
                                <p className="method__description">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
