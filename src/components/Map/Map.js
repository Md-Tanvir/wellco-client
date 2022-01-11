import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
  };
  
  const center = {
    lat: 22.845640,
    lng: 89.540329
  };

const Map = () => {
    // AIzaSyCZQdWZWsNyakL30EbvVherjO4c9HcqFc8
    return (
        <div className='py-5'>
            <h5 className='text-center'>OUR LOCATION</h5>
            <h2  className='text-center mb-5 main-title'>Come lets have a talk</h2>
             <LoadScript
        googleMapsApiKey={process.env.YOUR_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
        </div>
    );
};

export default Map;