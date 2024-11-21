import React from 'react';
import DishTile from './DishTile';
import './PopularDishes.css';

const dishes = [
    {
        id: 'spaghetti-carbonara',
        image: 'https://via.placeholder.com/420x280',
        name: 'Spaghetti Carbonara',
        description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.',
        time: '30 mins',
    },
    {
        id: 'chicken-tikka-masala',
        image: 'https://via.placeholder.com/420x280',
        name: 'Chicken Tikka Masala',
        description: 'Tender chunks of grilled chicken enveloped in a spiced creamy tomato sauce.',
        time: '45 mins',
    },
    {
        id: 'assorted-sushi-platter',
        image: 'https://via.placeholder.com/420x280',
        name: 'Assorted Sushi Platter',
        description: 'A delightful assortment of fresh sushi rolls, nigiri, and sashimi.',
        time: '60 mins',
    },
];

export default function PopularDishes() {
    return (
        <section className="popular-dishes">
            <div className="container">
                <h2 className="popular-dishes__title">Popular Dishes</h2>
                <div className="popular-dishes__tiles">
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
        </section>
    );
}