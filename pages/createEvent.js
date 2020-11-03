import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, 
    SafeAreaView, Dimensions, ActivityIndicator, TextInput, Button} from 'react-native';


export default function CreateEvent() {
    const [name, onChangeTextName] = React.useState('Nome');
    const [date, onChangeTextDate] = React.useState('Data');
    const [category, onChangeTextCategory] = React.useState('Categoria');
    const [description, onChangeTextDescription] = React.useState('Description');
   
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style="auto" />

            <View style={styles.container}>
                <Text style={styles.eventText}>
                    CRIAR NOVO EVENTO
                </Text>

                <View style={styles.inputView} >

                    <TextInput
                        style={styles.inputText}
                        onChangeText={text => onChangeTextName(text)}
                        value={name}
                    />
                </View>
                <View style={styles.inputView} >

                    <TextInput
                        style={styles.inputText}
                        onChangeText={text => onChangeTextDate(text)}
                        value={date}
                    />
                </View>
                <View style={styles.inputView} >

                    <TextInput
                        style={styles.inputText}
                        onChangeText={text => onChangeTextCategory(text)}
                        value={category}
                    />
                </View>
                <View style={styles.inputView} >

                    <TextInput
                        style={styles.inputText}
                        onChangeText={text => onChangeTextDescription(text)}
                        value={description}
                    />
                </View>
                <Button
                    style={styles.buttonForm}
                    title="Criar"
                    onPress={() => navigation.navigate('Eventos')}
                />
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
        color: '#fff'
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
    inputText: {
        height: 50,
        color: "#ff0275"
    },
    inputView: {
        width: Dimensions.get('window').width * 0.8,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    buttonForm: {
        width: Dimensions.get('window').width,
    }
});
