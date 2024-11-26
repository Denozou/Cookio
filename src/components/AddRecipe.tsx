import React, { useState } from "react";
import axios from "axios";
import "./AddRecipe.css";

const AddRecipe = ({ userId }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/recipes", {
                userId,
                title,
                description,
                ingredients,
                instructions,
            });
            setMessage("Recipe added successfully!");
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
    );
};

export default AddRecipe;
