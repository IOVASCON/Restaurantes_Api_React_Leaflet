import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SearchBar from "./components/SearchBar";
import restaurantsData from "./assets/restaurants.json";

function App() {
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantsData);

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredRestaurants(restaurantsData);
    } else {
      const filtered = restaurantsData.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div style={{ height: "calc(100vh - 50px)", width: "100%" }}>
        <MapContainer center={[-23.55052, -46.633308]} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredRestaurants.map((restaurant) => (
            <Marker key={restaurant.id} position={restaurant.location}>
              <Popup>
                <div style={{ textAlign: "center" }}>
                  <strong>{restaurant.name}</strong>
                  <p>{restaurant.description}</p>
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    style={{ width: "100px", height: "100px", borderRadius: "5px" }}
                  />
                  <p>
                    <a href={restaurant.website} target="_blank" rel="noopener noreferrer">
                      Visite o site
                    </a>
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
