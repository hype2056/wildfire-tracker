'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map({ fires }) {
  return (
    <MapContainer center={[37.5, -119]} zoom={6} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />
      {fires.map((fire, index) => (
        <CircleMarker
          key={index}
          center={[fire.latitude, fire.longitude]}
          radius={6}
          pathOptions={{ color: 'red', fillColor: 'orange', fillOpacity: 0.8 }}
        >
          <Popup>
            <strong>Brightness:</strong> {fire.bright_ti4} K<br />
            <strong>Date:</strong> {fire.acq_date}
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}