import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    body_container: {
        margin: 5,
        flexDirection: 'row',
        backgroundColor: '#FBFBFB',
        borderBottomLeftRadius: 40,
        borderTopLeftRadius: 40,
        textAlign: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        flex:1,
    },
    image: {
        minHeight: 90,
        width: 100,
        borderRadius: 40,
        resizeMode: 'contain',
    },
    text: {
        marginLeft: 10,
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'black',
        flex:1
    },
});
