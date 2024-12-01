import React from 'react'
import ArticleTile from './ArticleTile'
import DishTile from './DishTile';
import './NewArticles.css'
import SampleImage from "../assets/carbonara.jpg"
//import { FaAudioDescription } from 'react-icons/fa'
const articles = [
    {
        id: "sample-article",
        image: SampleImage,
        title: "Most popular dishes 2024",
        description: "In this article you'll find out what are the most pipular dishes this time of the year",

    }
    
]
export default function NewArticles() {
  return (
    <section className="popular-dishes">
      <h2 className="popular-dishes__title">New Articles</h2>
      <div className="popular-dishes__tiles">
        {articles.map((article) => (
          <ArticleTile
            key={article.id}
            id={article.id}
            image={article.image}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </section>
  )
}
