import React, { useState, useEffect } from "react";
import jsonData from "./restaurantData.js";
import "../css/card.css";
import { Blurhash } from "react-blurhash";

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
        <button onClick={sortAplha}>Sort A to Z</button>
        <button onClick={reverseAlpha}>Sort Z to A</button>
        <button onClick={unloadPage}>back to loading</button>
        <div className="grid-container">
          {restaurants.map((item, key) => (
            <div className="Card grid-item" key={key}>
              <p>{item.name}</p>
              <img className="Image" src={item.image} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1>All restaurants</h1>
        <button onClick={sortAplha}>Sort A to Z</button>
        <button onClick={reverseAlpha}>Sort Z to A</button>
        <button onClick={loadPage}>finnish loading!</button>
        <div className="grid-container">
          {restaurants.map((item, key) => (
            <div className="Card grid-item" key={key}>
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
