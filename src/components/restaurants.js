import React, { useState, useEffect } from "react";
import jsonData from "./restaurantData.js";
import "../App.css";
import { Blurhash } from "react-blurhash";
import { Container, Row, Col } from "react-bootstrap";
import Tag from "./tagMaker.js";

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => parseData(), []);

  const parseData = () => {
    setRestaurants(jsonData.restaurants);
  };

  const sortAplha = () => {
    restaurants.sort(function(a, b) {
      var name1 = a.name.toLowerCase();
      var name2 = b.name.toLowerCase();
      if (name1 < name2) {
        return -1;
      } else if (name2 > name1) {
        return 1;
      } else {
        return 0;
      }
    });
    setRestaurants([...restaurants]);
  };

  const reverseAlpha = () => {
    sortAplha();
    restaurants.reverse(function(a, b) {
      var name1 = a.name.toLowerCase();
      var name2 = b.name.toLowerCase();
      if (name1 < name2) {
        return -1;
      } else if (name2 > name1) {
        return 1;
      } else {
        return 0;
      }
    });
    setRestaurants([...restaurants]);
  };

  const loadPage = () => {
    setReady(true);
  };
  const unloadPage = () => {
    setReady(false);
  };

  if (ready) {
    return (
      <div>
        <h1>All restaurants</h1>
        <div className="buttonContainer">
          <button className="button" onClick={sortAplha}>
            Sort A to Z
          </button>
          <button className="button" onClick={reverseAlpha}>
            Sort Z to A
          </button>
          <button className="button" onClick={unloadPage}>
            back to loading
          </button>
        </div>
        <div className="restaurantContainer">
          {restaurants.map((item, key) => (
            <div className="restaurantDiv" key={key}>
              <p className="title">{item.name}</p>
              <img className="Image" src={item.image} alt={item.name} />
              <p>{item.description}</p>
              <Tag tags={item.tags} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>All restaurants</h1>
        <div className="buttonContainer">
          <button className="button" onClick={sortAplha}>
            Sort A to Z
          </button>
          <button className="button" onClick={reverseAlpha}>
            Sort Z to A
          </button>
          <button className="button" onClick={loadPage}>
            load page
          </button>
        </div>
        <div className="restaurantContainer">
          {restaurants.map((item, key) => (
            <div className="restaurantDiv" key={key}>
              <Blurhash
                hash={item.blurhash}
                width={400}
                height={300}
                resolutionX={32}
                resolutionY={32}
                punch={1}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Restaurant;
