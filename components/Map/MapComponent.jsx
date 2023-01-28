import React, { useState } from "react";
import {
  DistanceMatrixService,
  GoogleMap,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

export default function MapComponent() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  /// CLICK TO GET LAT LNG
  const [markers, setMarkers] = useState([]);
  const [destinationPosition, setDestinationPosition] = useState([]);
  const [distance, setDistance] = useState([]);

  const onMapClick = (e) => {
    setMarkers({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
    setDestinationPosition({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  const containerStyle = {
    width: "400px",
    height: "400px",
  };
  const center = { lat: 14.829494277866198, lng: 102.19258206357422 };
  const originPosition = { lat: 14.829494277866198, lng: 102.19258206357422 };

  return (
    <>
      <GoogleMap
        zoom={14}
        center={center}
        mapContainerStyle={containerStyle}
        onClick={onMapClick}
      >
        <DistanceMatrixService
          options={{
            destinations: [destinationPosition],
            origins: [originPosition],
            travelMode: "DRIVING",
          }}
          callback={(response) => {
            setDistance(
              response.rows.map((element) =>
                element.elements.map((distance) => distance.distance.text)
              )
            );
          }}
        />
        <Marker
          position={{
            lat: markers.lat,
            lng: markers.lng,
          }}
        />
      </GoogleMap>
      <div>
        <div>
          <span>ระยะทางคือ {distance}</span>
        </div>
      </div>
    </>
  );
}
