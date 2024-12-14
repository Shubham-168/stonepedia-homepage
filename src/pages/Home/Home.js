import React from "react";
import Hero from "../../components/Hero/Hero";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import BlogHighlights from "../../components/BlogHighlights/BlogHighlights";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <section className="categories">
        <h2>Categories</h2>
        <div className="category-list">
          {['Granite', 'Marble', 'Limestone', 'Slate'].map((item, index) => (
            <CategoryCard key={index} title={item} />
          ))}
        </div>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <Testimonial quote="Stonepedia is my go-to resource!" />
        <Testimonial quote="A comprehensive guide to stones." />
      </section>
      <BlogHighlights />
    </div>
  );
};

export default Home;