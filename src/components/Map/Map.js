import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 22.84564,
  lng: 89.540329,
};

const Map = () => {
  return (
    <div className="py-5">
      <h5 data-aos="fade-up" className="text-center">
        OUR LOCATION
      </h5>
      <h2 data-aos="fade-up" className="text-center mb-5 main-title">
        Come Let's Have a Talk
      </h2>
      <div data-aos="fade-up">
        <LoadScript googleMapsApiKey={process.env.YOUR_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;
