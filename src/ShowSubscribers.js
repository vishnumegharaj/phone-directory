import React, { Component } from 'react';
import Header from './Header.js';
import "./ShowSubscribers.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ShowSubscribers({ deleteSubscriberHandler }) {

  const subscribersList = useSelector(state => state.subscribers)
  console.log("Store state:", typeof subscribersList);

  function onDeleteClicked(subscriberId) {
    deleteSubscriberHandler(subscriberId);
  }



  return (
    <div>
      <Header heading="PHONE DIRECTORY" />
      <div className='container'>
        <Link to="/add" > <button className='add-btn'> Add </button> </Link>
        <div className="grid-items heading-container">
          <span className="heading name-heading">Name</span>
          <span className="heading phone-heading">Phone</span>
        </div>

        {
          subscribersList.subscribers.map(sub => {
            return (
              <div>
                <div key={sub.id} className='grid-items subscriber-details' >
                  <span className="heading ">{sub.name}</span>
                  <span className="heading ">{sub.phone}</span>
                  <button className='delete-btn' onClick={() => onDeleteClicked(sub.id)}>Delete</button>
                  
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );

} 
