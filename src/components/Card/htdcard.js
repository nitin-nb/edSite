import React from "react";

const Card = () => {
  return (
    <div className="card2">
      <div className="card-content">
        <h3 className="card-heading">Card 1</h3>
        <p className="card-description">This is the description for Card 1.</p>
      </div>
    </div>
  );
};

const CardRow = () => {
  return (
    <div className="cardrow">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Cards = () => {
  return (
    <div className="Cards">
      <CardRow />
    </div>
  );
};

export default Cards;
