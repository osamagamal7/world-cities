import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

type MapProps = {
    city: string,
    latitude: string,
    longitude: string,
}

export const Map: React.FC<MapProps> = ({ city, latitude, longitude }) => {

    if (!latitude || !longitude) {
        return null
    }
    return (
        <MapContainer center={[parseInt(latitude), parseInt(longitude)]} zoom={8} scrollWheelZoom={false} style={{ height: "300px", width: "500px" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[parseFloat(latitude), parseFloat(longitude)]}>
                <Popup>
                    {city}
                </Popup>
            </Marker>
        </MapContainer>
    );
};
