import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PlaceItem from '@/components/Places/PlaceItem';
import { Place } from '@/types/model/place';
import { Colors } from '@/constants/colors';

interface IProps {
  places: Place[];
}

const PlaceList = ({ places }: IProps) => {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places found!</Text>
      </View>
    );
  }
  const placePressHandler = () => {};
  return (
    <FlatList
      data={places}
      key={'_'}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PlaceItem place={item} onSelect={placePressHandler} />
      )}
    />
  );
};

export default PlaceList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.primary200,
  },
});
