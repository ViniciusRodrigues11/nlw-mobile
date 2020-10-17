import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { MapEvent, Marker } from 'react-native-maps';
import mapMarkerImg from '../../images/mapMarker.png';
import { useState } from 'react';

import mapStyleDark from '../../assets/mapStyle'
import mapStyleLight from '../../assets/mapStyleLight'


interface OrphanageProps {
  theme: string
}


export default function SelectMapPosition({ theme} : OrphanageProps) {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })

  console.log(theme)

  const navigation = useNavigation();

  function handleNextStep() {
    navigation.navigate('OrphanageData', {position});
  }

  function handleSelecMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate)
  }

  return (
    <View style={styles.container}>
      <MapView
        customMapStyle={theme == 'light' ? mapStyleLight : mapStyleDark}
        initialRegion={{
          latitude: -8.757270,
          longitude: -63.886379,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        style={styles.mapStyle}
        onPress={handleSelecMapPosition}
      >
        {position.latitude != 0 && (
          <Marker
            icon={mapMarkerImg}
            coordinate={{ latitude: position.latitude, longitude: position.longitude }}
          />
        )}
      </MapView>
      {position.latitude != 0 && (
            <RectButton style={styles.nextButton} onPress={handleNextStep}>
            <Text style={styles.nextButtonText}>Próximo</Text>
          </RectButton>
      ) }
  
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  nextButton: {
    backgroundColor: '#15c3d6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,

    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 40,
  },

  nextButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    fontSize: 16,
    color: '#FFF',
  }
})