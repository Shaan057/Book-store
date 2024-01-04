import { Component } from "react";
import Header from "../Header";
import { Link } from "react-router-dom"

import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Header />
        <div className="banner-container">
          <div className="store-image-container"><img className="store-img" src='https://res.cloudinary.com/dx8csuvrh/image/upload/v1704387056/20942759_pvbg59.jpg' alt='store' /></div>

          <div className="banner-content-container">
            <h1 className="banner-heading">Book Store</h1>
            <p className="banner-text">
              In 1992, our bookstore was founded with a clear and passionate mission:
              to make a positive impact on the world through the transformative power
              of reading and learning. From our humble beginnings in Mumbai to our
              current presence with 92 stores across 32 cities, we have dedicated over
              three decades to serving and nurturing a thriving community of readers.
            </p>
            <p className="banner-text">
              As India's leading bookstore retailer, we take pride in championing
              books and fostering a deep love for the written word. Our collection,
              handpicked with care, spans a diverse range of topics. Our stores are
              not just spaces; they are thoughtfully designed havens that inspire and
              provide quiet retreats for you to explore and discover great books.
            </p>
            <Link to="/books" className="nav-link">
              <button className="explore-button">Explore Books</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
