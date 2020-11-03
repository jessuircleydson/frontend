import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList,
    SafeAreaView, Dimensions, ActivityIndicator, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Item = ({ name }) => (
    <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
    </View>
);

export default function Events({ navigation }) {
    const renderItem = ({ item }) => (
        <Item name={item.name} />
    );

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://10.0.0.14:8080/api/events')
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
                        EVENTOS
                    </Text>
                    <Button
                        style={styles.buttonNavi}
                        title="Adicionar Evento"
                        onPress={() => navigation.navigate('AdicionarEvento')}
                    />
                </View>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        inverted={true}
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                    />
                )}
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
        textAlign:'center',
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
