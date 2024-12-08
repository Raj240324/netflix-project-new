import React from "react";
import "./TitleCard.css";
import cards_data from "../../assets/cards/Cards_data";

const TitleCard = ({ title }) => {
  return (
    <div className="title-card">
      <h3 style={{ marginBottom: 5 }}>
        {title ? title : "Popular on Netflix"}
      </h3>
      <div className="card-list">
        {cards_data.map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCard;
