import React, { useState } from "react";
import "./pay.css";
import { Link } from "react-router-dom";
import StripeContainer from "../Payment/StripeContainer";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/index";
import { updateDoc ,doc} from "firebase/firestore";
import {db} from '../config/firebase'

const PayToViewContent = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showButton, setShowButton] = useState(false);
  const [amount, setAmount] = useState(0);
  const [sucess, setSucess] = useState(false);
  const user=useSelector(state=>state);
  const dispatch=useDispatch();
  
  const handleOptionClick = (postsPerDay, price) => {
    setSelectedOption({ postsPerDay, price });
    setAmount(price);
  };
  const sucesshandler =async () => {
    setSucess(true);
    const userRef=doc(db,"users",user.id);
    const newUser={...user,totalPostViews:amount};
    dispatch(actions.changeCurrentUserTotalPostViews(amount));
    
    await updateDoc(userRef,newUser);
  };
  return (
    <div className="content-container">
      {!sucess && (
        <>
          <h1 className="content-title">Pay to View Content</h1>
          {user.totalPostViews===1&&<h4>1 post per day is free</h4>}
          {user.totalPostViews!==1&&<h4>Your plan: you can view {user.totalPostViews} posts per day</h4>}
          
          <div className="subscription-options">
            <div className={`subscription-option ${amount === 3 ? 'curr' : ''}`} >
              <p>3 posts per day - $3</p>
              <button
                className= "subscription-button"
                onClick={() => handleOptionClick(3, 3)}
              >
                Buy Now
              </button>
            </div>
            <div className={`subscription-option ${amount===5?'curr':''}`}>
              <p>5 posts per day - $5</p>
              <button
                className="subscription-button"
                onClick={() => handleOptionClick(5, 5)}
              >
                Buy Now
              </button>
            </div>
            <div className={`subscription-option ${amount === 10 ? 'curr' : ''}`}>
              <p>10 posts per day - $10</p>
              <button
                className="subscription-button"
                onClick={() => handleOptionClick(10, 10)}
              >
                Buy Now
              </button>
            </div>
          </div>
        </>
      )}

      {!sucess && selectedOption && (
        <div className="selected-option">
          <h3 className="selected-option-margin">
            You selected the subscription for {selectedOption.postsPerDay} posts
            per day.
          </h3>
          <h4 className="selected-option-margin">
            Total Price: ${selectedOption.price}
          </h4>
          <StripeContainer price={amount} sucess={sucesshandler} />
        </div>
      )}
      <br />
      {sucess && (
        <div className="selected-option">
          <p>You have purchased the subscription for {amount} posts per day.</p>
          <p>Total Price: ${amount}</p>
        </div>
      )}
      <div className="flex center">


        <Link to=".." relative="route">
          <button className="view-post-button">View posts</button>
        </Link>
      </div>
    </div>
  );
};

export default PayToViewContent;
