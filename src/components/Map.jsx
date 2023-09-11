'use client'
import Leaflet from 'leaflet';
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';

const latLngSaoPaulo = [-23.5489, -46.6388];

function LocationMarker({ onChange }) {
  const [position, setPosition] = useState(null);
  useMapEvents({
    click(e) {
      onChange({ target: { name: 'latLng', value: [e.latlng.lat, e.latlng.lng] } });
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return position === null ? null : (
    <Marker
      icon={ new Leaflet.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/3082/3082383.png',
        iconSize: [40,40],
        popupAnchor: [0,-15],
      })}
      position={position}
    />
  )
}

export default function Map({ onChange }) {
  return (
    <div className='h-96'>
      <MapContainer style={{ height: '100%', width: '100%', zIndex: 0 }} center={latLngSaoPaulo} zoom={12}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker onChange={onChange} />
      </MapContainer>
    </div>
  )
}