import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'
import Config from 'react-native-config'
import CategoriesCard from '../../components/CategoriesCard'

const Categories = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const { data: response } = await axios.get(Config.API_CATEGORIES)
        setData(response)
        setLoading(false)
    }

    const renderCategory = ({ item }) => <CategoriesCard category={item} />;


    if (loading) {
        return <Text>Yukeln bakim</Text>
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={data.categories} renderItem={renderCategory} />
        </SafeAreaView>
    )
}

export default Categories;