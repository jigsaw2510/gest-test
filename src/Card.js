import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './Card.css';

const Card = ({ id, name, code, dimensions, retailPrice, partnersPrice, image, stock, fontColor }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };
  const cardClassName = `${fontColor}`;

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      {/* Front Side */}
      <div
        key="front"
        className="tc bg-light-gray dib br3 grow bw2 shadow-5 card-container"
        onClick={handleFlip}
      >
        <div className="img-container">
          <img src={process.env.PUBLIC_URL + `/${image}`} alt="CT1" />
        </div>
        <h2>{name}</h2>
        <p>{code}</p>
        <p>Dimensiuni: {dimensions}</p>
        <p className={cardClassName} style={{fontSize: "1.3em"}}>Stoc: {stock}</p>
        <p>Pret: {retailPrice}</p>
      </div>

      {/* Back Side */}
      <div
        key="back"
        className="tc bg-light-gray dib br3 grow bw2 shadow-5 card-container"
        onClick={handleFlip}
      >
        <div className="img-container">
          <img src={process.env.PUBLIC_URL + `/${image}`} alt="CT1" />
        </div>
        <h2>{name}</h2>
        <p>{code}</p>
        <p>Dimensiuni: {dimensions}</p>
        <p className={cardClassName} style={{fontSize: "1.3em"}}>Stoc: {stock}</p>
        <p style={{color: "red"}}>Pret: {partnersPrice}</p>
      </div>
    </ReactCardFlip>
  );
};

export default Card;

