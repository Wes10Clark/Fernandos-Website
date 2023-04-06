import React from "react";
import "./home.css";
import marg from "../assets/Marg.png";
import Brand from "../assets/Brand.png";
import barria from "../assets/Barria.jpeg";
import Madison from "../assets/FernandosMadison.png";
import Pearl from "../assets/FernandosPearl.png";
import Reservoir from "../assets/Res.png";

const Home = () => {
  return (
    <div className="home">
      <div className="img-container">
        <img className="chipsNsalsa" src={marg} alt="chips and salsa" />
        <img className="brand" src={Brand} alt="Logo" />
        <img className="taco" src={barria} alt="taco" />
      </div>
      <div className="locations">
        <h3 className="location-title">Our Locations</h3>
        <div className="row flex-row">
          <div className="col-md-4">
            <div className="card">
              <img
                className="restaurant-image"
                src={Madison}
                alt="Fernando`s madison"
              />
              <div className="card-body">
                <h5 className="card-loaction">Madison</h5>
                <p>121 Conlony Crossing way STE A, Madison, MS</p>
                <a
                  href="https://goo.gl/maps/zBAVKDrqYENw1TT27"
                  className="btn btn-danger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={Pearl} alt="Fernando`s Pearl" />
              <div className="card-body">
                <h5 className="card-loaction">Pearl</h5>
                <p>5647 US-80 #16, Pearl, MS</p>
                <a
                  href="https://goo.gl/maps/kY3Y6Y1xcgbboQs46"
                  className="btn btn-danger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src={Reservoir} alt="Fernando`s Reservoir" />
              <div className="card-body">
                <h5 className="card-loaction">Reservoir</h5>
                <p>1149 Old Fannin Rd, Brandon, MS</p>
                <a
                  href="https://goo.gl/maps/s8hf9GaU41inQ9zN6"
                  className="btn btn-danger"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;