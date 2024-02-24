import React from "react";
import "./Card.css";
const Card = ({ img, fruitName }) => {
  return (
    <div className="card" style={{ width: "18.5rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{fruitName}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button href="#" className="card-button">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Card;
