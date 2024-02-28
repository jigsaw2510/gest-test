import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import { ref, get } from 'firebase/database'; // Correct import syntax
import { getDatabase } from 'firebase/database';
import { database } from './firebase'; // Import the Firebase database instance
import './Card.css';

const Card = ({ id, fontColor }) => {
  const [isFlipped, setFlipped] = useState(false);
  const [cardData, setCardData] = useState(null);

  /* Fetching data from database */
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use getDatabase to get the database instance
        const db = getDatabase();

        // Fetch data from Firebase based on the card's ID
        const dataRef = ref(db, `${id - 1}`);
        const snapshot = await get(dataRef);
        if (snapshot.exists()) {
          const data = snapshot.val();
          setCardData(data);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error('Error fetching data from Firebase:', error);
      }
    };

    fetchData();
  }, [id]);
  /* Fetching data end */

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  if (!cardData) {
    return null; // Handle the case where data is still being fetched
  }

  const { name, code, dimensions, retailPrice, partnersPrice, image, stock } = cardData;

  const cardClassName = `${fontColor}`;

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      {/* Front Side */}
      <div
        key="front"
        className="tc bg-light-gray dib br3 bw2 shadow-5 card-container"
        onClick={handleFlip}
      >
        <div className="img-container">
          <img src={process.env.PUBLIC_URL + `/images/${image}`} alt="CT1" />
        </div>
        <h2>{name}</h2>
        <span>{code}</span><br />
        <span>Dimensiuni: {dimensions}</span><br />
        <span>Pret: {retailPrice}</span><br />
        <p className={cardClassName} style={{ fontSize: "1.3em" }}>Stoc: {stock}</p>
      </div>

      {/* Back Side */}
      <div
        key="back"
        className="tc bg-light-gray dib br3 bw2 shadow-5 card-container"
        onClick={handleFlip}
      >
        <div className="img-container">
          <img src={process.env.PUBLIC_URL + `/images/${image}`} alt="CT1" />
        </div>
        <h2>{name}</h2>
        <span>{code}</span><br />
        <span>Dimensiuni: {dimensions}</span><br />
        <span style={{ color: "red" }}>Pret: {partnersPrice}</span><br />
        <p className={cardClassName} style={{ fontSize: "1.3em" }}>Stoc: {stock}</p>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
