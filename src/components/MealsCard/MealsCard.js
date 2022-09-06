import React from 'react'
import { SafeAreaView, View, Text, Image, TouchableWithoutFeedback, ImageBackground } from 'react-native'
import Config from 'react-native-config'
import styles from './MealsCard.style';

const Meals = ({ meal, onSelect }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={{ uri: meal.strMealThumb }}>
                    <View style={styles.inner_container}>
                        <View style={styles.info_container}>
                            <Text style={styles.title}>{meal.strMeal}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Meals;