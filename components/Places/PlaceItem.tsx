import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Place } from '@/types/model/place';

interface IProps {
  place: Place;
  onSelect: () => void;
}

const PlaceItem = ({ place, onSelect }: IProps) => {
  return (
    <Pressable onPress={onSelect}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
