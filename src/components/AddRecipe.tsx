import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddRecipe.css";

const AddRecipe = ({ userId }) => {
    //всі поля форми для додавання рецепту
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState("");

    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1); //повертаємося на попередню сторінку
    };
    //для додавання картинки
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    //додавання рецепту
    const handleSubmit = async (e) => {//e = event
        e.preventDefault();
        try {//відправляємо те, що вписав юзер до бекенду
            const response = await axios.post("http://localhost:8080/api/recipes", {
                userId,
                title,
                description,
                ingredients,
                instructions,
            });
            setMessage("Recipe added successfully!");
            //очищаємо поля вводу тексту 
            setTitle("");
            setDescription("");
            setIngredients("");
            setInstructions("");
        } catch (error) {
            console.error("Error adding recipe:", error);
            setMessage("Failed to add recipe.");
        }
    };

    return (
        
        <div className="add-recipe-container">
        <button onClick={handleGoBack} className="go-back-button">Go Back</button>
            <div className="add-recipe">
                <h2>Add a New Recipe</h2>
            
                <form onSubmit={handleSubmit}>
                    <label>
                        Title:
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Image:
                        <input
                            type="file"
                            onChange={handleImageChange}
                            accept="image/*"
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Ingredients (comma-separated):
                        <textarea
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Instructions:
                        <textarea
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            required
                        />
                    </label>
                    <button type="submit">Add Recipe</button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default AddRecipe;
