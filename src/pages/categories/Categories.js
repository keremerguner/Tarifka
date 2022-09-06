import axios from 'axios'
import React from 'react'
import { SafeAreaView, View, Text, FlatList, Button } from 'react-native'
import Config from 'react-native-config'
import CategoriesCard from '../../components/CategoriesCard'
import useFetch from '../../hooks/useFetch'
import Lottie from 'lottie-react-native';

const Categories = ({navigation}) => {

    const { data, loading, error } = useFetch(Config.API_CATEGORIES)

    const handleCategorySelect = (strCategory) => {
        navigation.navigate('Meals', { strCategory })

    }

    const renderCategory = ({ item }) => <CategoriesCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />;


    if (loading) {
        return <Lottie source={require('../../assets/loading.json')} autoPlay loop />
    }

    if (error) {
        return <Lottie source={require('../../assets/error.json')} autoPlay loop />
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={data.categories} renderItem={renderCategory} />
        </SafeAreaView>
    )
}

export default Categories;