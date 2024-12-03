import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  const initialPosition = [-23.55052, -46.633308]; // Coordenadas de São Paulo

  return (
    <MapContainer
      center={initialPosition}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={initialPosition}>
        <Popup>
          São Paulo! <br /> Um exemplo básico do Leaflet.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
