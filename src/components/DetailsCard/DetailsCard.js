import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React from 'react';
import styles from './DetailsCard.style';

const DetailCard = ({ detail, onSelect }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
      <View style={styles.body_container}>
        <Text style={styles.meal_name}>{detail.strMeal}</Text>
        <Text style={styles.meal_from}>{detail.strArea}</Text>
      </View>
      <View style={styles.separator}></View>
      <Text style={styles.description}>{detail.strInstructions}</Text>
      <TouchableOpacity onPress={onSelect} style={styles.button}>
        <Text style={styles.button_text}>Watch on Youtube</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DetailCard;