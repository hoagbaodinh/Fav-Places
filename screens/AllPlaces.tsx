import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PlaceList from '@/components/Places/PlaceList';
import DUMMY_PLACES from '@/constants/DUMMY_PLACES';

const AllPlaces = () => {
  return <PlaceList places={DUMMY_PLACES} />;
};

export default AllPlaces;

const styles = StyleSheet.create({});
