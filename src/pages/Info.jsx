import React from "react";
import "./info.css";

const Info = () => {
  return (
    <div className="info">
      <h2 className="section-title">Info</h2>
      <div className="card">
        <h2 className="info-title">Attention</h2>
        <h5 className="info-details">
          The menu on this website is based on the Madison location prices and
          menu items may vary per location
        </h5>
      </div>
      <div className="card">
        <h2 className="info-title">Happy Hour</h2>
        <h5 className="info-details">Happy Hour is from 2:00pm - 6:00pm</h5>
        <h5 className="info-details">Happy Hour Margarita - 12oz $2.99</h5>
        <h5 className="info-details">
          Happy Hour Beer - Small $1.99 - Large $3.99
        </h5>
      </div>
      <div className="card">
        <h2 className="info-title">Alcohol</h2>
        <h5 className="info-details">Madison full bar and drink menu </h5>
        <h5 className="info-details">
          Reservoir only bottle beer and draft beers
        </h5>
        <h5 className="info-details"> Pearl no alcohol served</h5>
      </div>
      <div className="card">
        <h2 className="info-title">Apply</h2>
        <h5 className="info-details">
          Please come to the location you would like to apply at for an
          application
        </h5>
      </div>
      <div className="card">
        <h2 className="info-title">Catering</h2>
        <h5 className="info-details">
          Please call the resturant nearest you to set up catering
        </h5>
      </div>
      <div className="card">
        <h2 className="info-title">To-Go</h2>
        <h5 className="info-details">
          Please Check the bottom of the webpage for the number of the location
          you would like to place a to-go order
        </h5>
      </div>
      <div className="card">
        <h2 className="info-title">Contact Us</h2>
        <h5 className="info-details">
          Contact us by calling the numbers at the bottom of the page or contact
          us on facebook with the links at the bottom
        </h5>
      </div>
    </div>
  );
};

export default Info;
