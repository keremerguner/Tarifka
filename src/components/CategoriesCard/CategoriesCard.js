import React from 'react'
import { SafeAreaView, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import Config from 'react-native-config'
import styles from './CategoriesCard.style';

const Categories = ({ category, onSelect }) => {

    return (
        <TouchableWithoutFeedback onPress={onSelect} >
            <View style={styles.container}>
                <View style={styles.body_container}>
                    <Image source={{ uri: category.strCategoryThumb }} style={styles.image} />
                    <Text style={styles.text}>{category.strCategory} </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Categories;