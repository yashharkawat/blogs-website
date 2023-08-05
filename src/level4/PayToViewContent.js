import React, { useState } from 'react';
import './pay.css';
import { Link } from 'react-router-dom';
const PayToViewContent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showButton,setShowButton]=useState(false);
  const handleOptionClick = (postsPerDay, price) => {
    setSelectedOption({ postsPerDay, price });
    setShowButton(true);
  };

  return (
    <div className="content-container">
      {!showButton && <>
        <h1 className="content-title">Pay to View Content</h1>
      <p>1 post per day free</p>
      <div className="subscription-options">
        <div className="subscription-option">
          <p>3 posts per day - $3</p>
          <button className="subscription-button" onClick={() => handleOptionClick(3, 3)}>Buy Now</button>
        </div>
        <div className="subscription-option">
          <p>5 posts per day - $5</p>
          <button className="subscription-button" onClick={() => handleOptionClick(5, 5)}>Buy Now</button>
        </div>
        <div className="subscription-option">
          <p>10 posts per day - $10</p>
          <button className="subscription-button" onClick={() => handleOptionClick(10, 10)}>Buy Now</button>
        </div>
      </div>
      </>}
      
      {selectedOption && (
        <div className="selected-option">
          <p>You {showButton?'purchased ':'currently have '} the subscription for {selectedOption.postsPerDay} posts per day.</p>
          <p>Total Price: ${selectedOption.price}</p>
        </div>
      )}
      {showButton && 
      <div className='flex space-between'>
        <button className="subscription-button" onClick={() =>setShowButton(false)} >Change Plan</button>
        
        <Link to='..' relative='route'><button className='subscription-button' >View posts</button></Link>
        </div>
      }
      
    </div>
  );
};

export default PayToViewContent;
