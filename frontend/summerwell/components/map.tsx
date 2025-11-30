import MapView from 'react-native-maps';
import React from 'react';

export default function Map() {
  return (
        <MapView
            provider="google"
            style={{ flex: 1 }}
            initialRegion={{
                latitude: 44.5668049534031, 
                longitude: 25.939700548772894,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
            }}
            showsUserLocation={true}
            showsMyLocationButton={true}
        >
    </MapView>
  );
}