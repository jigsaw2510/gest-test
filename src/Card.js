import React, { useState, useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import { ref, get, set } from 'firebase/database';
import { getDatabase } from 'firebase/database';
import { database } from './firebase'; // Import the Firebase database instance
import './Card.css';

const Card = ({ id, fontColor, updateStock }) => {
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
  }, [id, isFlipped]);
  /* Fetching data end */

  const handleFlip = (event) => {
    // Check if the click target is one of the buttons
    if (!event.target.classList.contains('add-button') && !event.target.classList.contains('subtract-button')) {
      setFlipped(!isFlipped);
    }
  };

  /*Stock management code*/
  const handleAddStock = () => {
    // Update stock in the database
    updateStock(id, cardData.stock + 1);
    // Add changes to history
    // Get the current date and time
    const currentDate = new Date();

    // Format the date and time
    const formattedMinutes = currentDate.getMinutes().toString().padStart(2, '0');
    const formattedHours = currentDate.getHours().toString().padStart(2, '0');
    const formattedDate = `${formattedHours}:${formattedMinutes}, ${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

    // Print to console.log
    console.log('Adaugare:', formattedDate, code);
    }

  const handleSubtractStock = () => {
    // Update stock in the database
    updateStock(id, cardData.stock - 1);
    // Add changes to history
    // Get the current date and time
    const currentDate = new Date();

    // Format the date and time
    const formattedMinutes = currentDate.getMinutes().toString().padStart(2, '0');
    const formattedHours = currentDate.getHours().toString().padStart(2, '0');
    const formattedDate = `${formattedHours}:${formattedMinutes}, ${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;

    // Print to console.log
    console.log('Scadere:', formattedDate, code);
  };

  /*Stock management code end*/

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
        <h2>{code}</h2>
        <span>{name}</span><br />
        <span>Dimensiuni: {dimensions}</span><br />
        <span id="pret">Pret: {retailPrice}</span><br />
        <p className={cardClassName} style={{ fontSize: "1.3em" }}>Stoc: {stock}</p>
        <button onClick={handleAddStock}>ADAUGA</button>
        <button onClick={handleSubtractStock}>SCADE</button>
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
        <h2>{code}</h2>
        <span>{name}</span><br />
        <span>Dimensiuni: {dimensions}</span><br />
        <span style={{ color: "red" }}>Pret: {partnersPrice}</span><br />
        <p className={cardClassName} style={{ fontSize: "1.3em" }}>Stoc: {stock}</p>
        <button onClick={handleAddStock}>ADAUGA</button>
        <button onClick={handleSubtractStock}>SCADE</button>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
