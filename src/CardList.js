import React from 'react';
import Card from './Card.js';

const CardList = ({ monumente }) => {
  return (
    <div className="main-container">
      {monumente.map((monument, i) => {
        let fontColor;
        if (monument.stock > 5) {
          fontColor = 'green';
        } else if (monument.stock > 2) {
          fontColor = 'yellow';
        } else if (monument.stock > 0) {
          fontColor = 'orange';
        } else {
          fontColor = 'red';
        }

        return (
          <Card
            key={monument.id}
            id={monument.id}
            name={monument.name}
            code={monument.code}
            dimensions={monument.dimensions}
            retailPrice={monument.retailPrice}
            partnersPrice={monument.partnersPrice}
            image={monument.image}
            stock={monument.stock}
            fontColor={fontColor} // Pass fontColor as a prop
          />
        );
      })}
    </div>
  );
};

export default CardList;
