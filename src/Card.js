import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Card.css';

const Card = ({ id, name, code, dimensions, retailPrice, partnersPrice }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      {/* Front Side */}
      <div
        key="front"
        className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card-container"
        onClick={handleFlip}
      >
        <div className="img-container">
          <img alt='robots' src='ct1.png' />
        </div>
        <h2>{name}</h2>
        <p>{code}</p>
        <p>Dimensiuni: {dimensions}</p>
        <p>Pret: {retailPrice}</p>
      </div>

      {/* Back Side */}
      <div
        key="back"
        className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card-container"
        onClick={handleFlip}
      >
        <div className="img-container">
          <img alt='robots' src='ct1.png' />
        </div>
        <h2>{name}</h2>
        <p>{code}</p>
        <p>Dimensiuni: {dimensions}</p>
        <p style={{color: "red"}}>Pret parteneri: {partnersPrice}</p>
      </div>
    </ReactCardFlip>
  );
};

export default Card;

