import React from "react";
import star from "../assets/Star 1.svg";
import eclipse from "../assets/Ellipse 6.svg";

const Card = ({ item }) => {
  return (
    <div className="cards">
      <div className="card-container">
        {item.openSpots === 0 ? (
          <p className="badge">Sold Out</p>
        ) : (
          <p className="badge">online</p>
        )}

        <img src={item.coverImg} alt="Kate_image" />
        <div className="card-info">
          <img src={star} alt="rating" />
          <p className="rating">{item.stats.rating}</p>
          <p className="rating-2">({item.stats.reviewCount})</p>
          <img className="ellipse" src={eclipse} alt="round" />
          <p className="country">{item.location}</p>
        </div>
        <p className="tagline">{item.title}</p>
        <p className="price">
          <strong>From ${item.price}</strong> / person
        </p>
      </div>
    </div>
  );
};
export default Card;
