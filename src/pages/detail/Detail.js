import { Text, ActivityIndicator, FlatList, Linking } from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import DetailCard from '../../components/DetailsCard';
import Lottie from 'lottie-react-native';


const Detail = ({ route }) => {
    const { idMeal } = route.params;

    const { data, loading, error } = useFetch(`${Config.API_DETAIL}${idMeal}`);

    const renderDetail = ({ item }) => (
        <DetailCard
            detail={item}
            onSelect={() => Linking.openURL(item.strYoutube)}
        />
    );

    if (loading) {
        return <Lottie source={require('../../assets/loading.json')} autoPlay loop />
    }

    if (error) {
        return <Lottie source={require('../../assets/error.json')} autoPlay loop />

    }
    return <FlatList data={data.meals} renderItem={renderDetail} />;
};

export default Detail;
