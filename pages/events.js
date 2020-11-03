import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList,
    SafeAreaView, Dimensions, ActivityIndicator, Button, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HOST, PORT } from '../services/config';


/* const Item = ({ name }) => (
    <View style={styles.item}>
        <Text style={styles.name}>{name}</Text>
    </View>
);
 */
export default function Events({ navigation }) {
    const _onPressButton = (id) => {
        console.log(id)
        navigation.navigate('EventDetail', {
            itemId: id,
        });
    }
    const Item = ({ name, id }) => (
        <TouchableHighlight onPress={() => {_onPressButton(id)}} underlayColor="white">

            <View style={styles.item}>
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableHighlight>
    );
    const renderItem = ({ item }) => (
        <Item name={item.name} id={item.id} />
    );

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const url = 'http://' + HOST + ':' + PORT + '/api/events';

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => setData(json.events))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style="auto" />
            
            <View style={styles.container}>
                <View >

                    <Text style={styles.eventText}>
                        EVENTOS
                    </Text>
                    <Button
                        
                        title="Adicionar Evento"
                        onPress={() => navigation.navigate('AdicionarEvento')}
                    />      
                </View>
                {isLoading ? <ActivityIndicator /> : (
                    <FlatList
                        style={styles.listF}
                        inverted={true}
                        data={data}
                        renderItem={renderItem}
                        extraData={this}
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
    listF: {
        marginTop: 10,
    }
});
