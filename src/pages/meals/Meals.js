import React from "react";
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import MealsCard from '../../components/MealsCard';
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import Lottie from 'lottie-react-native';


const Meals = ({ route, navigation }) => {

    const { strCategory } = route.params;

    const { data, loading, error } = useFetch(`${Config.API_MEALS}${strCategory}`)

    const handleMealSelect = (idMeal) => {
        navigation.navigate('Detail', {idMeal})
    }


    const renderMeals = ({ item }) => <MealsCard meal={item} onSelect={ ()=> handleMealSelect(item.idMeal)} />;


    if (loading) {
        return <Lottie source={require('../../assets/loading.json')} autoPlay loop />
    }

    if (error) {
        return <Lottie source={require('../../assets/error.json')} autoPlay loop />
    }

    return (
        <SafeAreaView>
            <FlatList data={data.meals} renderItem={renderMeals} />
        </SafeAreaView>
    )
}

export default Meals;