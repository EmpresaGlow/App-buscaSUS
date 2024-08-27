import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // Pega a localização
import MapStyle from './MapStyle.json';
import { MaterialIcons } from '@expo/vector-icons'; // Importa ícones

// Lista de marcadores
const markers = [
  {
    latitude: -23.5511947,
    longitude: -46.4144475,
    title: "Casa da Ana",
    description: "se cair para na estação",
  },
  {
    latitude: -23.5416431,
    longitude: -46.4021451,
    title: "Casa da Ester",
    description: "o morro",
  },
];

// Função para obter a localização
const getMyLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== 'granted') return;

  const { coords } = await Location.getCurrentPositionAsync({});
  const { latitude, longitude } = coords;

  // Retorna o objeto 'Region'
  return {
    latitude,
    longitude,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
};

// Componente principal
export default function App() {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  // Função para animar o mapa até a localização
  const goToMyLocation = async () => {
    const region = await getMyLocation();
    if (region && mapRef.current) {
      mapRef.current.animateToRegion(region, 900);
    }
  };
  // const goToMyLocation = async () => {
  //   const region = await getMyLocation();
  //   if (region && mapRef.current) {
  //     mapRef.current.animateToRegion(region, 1000);
  //   }
  // };


  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        customMapStyle={MapStyle}
        showsUserLocation
        onMapReady={() => goToMyLocation()}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
      <TouchableOpacity style={styles.buttonContainer} onPress={goToMyLocation}>
        <MaterialIcons name="my-location" size={40} color="blue" />
      </TouchableOpacity>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 70,
    right: 20,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    zIndex: 1, // Garante que o botão fique acima do mapa
  },
});
