import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {
    StyleSheet, Text, View, FlatList,
    SafeAreaView, Dimensions, ActivityIndicator, Button, TouchableHighlight
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';




export default function EventDetail({ route, navigation }) {

    const { itemId } = route.params;

    const Item = ({ name, price, section }) => (
            <View style={styles.item}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.section}>{section}</Text>
            </View>
    );
    const renderItem = ({ item }) => (
        <Item name={item.name} price={item.price} section={item.section} />
    );

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://10.0.0.14:8080/api/events/' + itemId)
            .then((response) => response.json())
            .then((json) => setData(json.events))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style="auto" />

            <View style={styles.container}>
                <View  >
                    <Text style={styles.eventText}>
                        Nome: {data.name}
                    </Text>
                    <Text style={styles.eventText}>
                        data: {data.date}
                    </Text>
                    <Text style={styles.eventText}>
                        Categoria: {data.category}
                    </Text>
                    <Text style={styles.eventText}>
                        Descrição: {data.description}
                    </Text>


                    <Text style={styles.eventText}>
                        Ingressos
                    </Text>

                    <FlatList
                        style={styles.listF}
                        inverted={true}
                        data={data.has_tickets}
                        renderItem={renderItem}
                        extraData={this}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        backgroundColor: '#451c68',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        textAlign: 'center',

    },
    eventText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 30,
        color: '#fff',
        textAlign: 'center',
    },
    item: {
        width: Dimensions.get('window').width,
        padding: 30,
        backgroundColor: '#ff0275',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        marginBottom: 1
    },
    name: {
        color: '#fff',

    },
    buttonNavi: {
        marginBottom: 10,
    }
});
