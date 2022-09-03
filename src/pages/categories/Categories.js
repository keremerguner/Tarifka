import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import Config from 'react-native-config'
import CategoriesCard from '../../components/CategoriesCard'
import useFetch from '../../hooks/useFetch'

const Categories = () => {

    const { data, loading, error } = useFetch(Config.API_CATEGORIES)

    const renderCategory = ({ item }) => <CategoriesCard category={item} />;


    if (loading) {
        return <Text>Yukeln bakim</Text>
    }

    if (error) {
        return <Text>Hata Meydana Geldi</Text>
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={data.categories} renderItem={renderCategory} />
        </SafeAreaView>
    )
}

export default Categories;