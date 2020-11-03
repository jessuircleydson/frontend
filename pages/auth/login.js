import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, SafeAreaView, View, Text, TextInput, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Login({ navigation }) {
    const [email, onChangeText] = React.useState('Email');
    const [pass, onChangeTextPass] = React.useState('Senha');

    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style="auto" />

            <View style={styles.container}>
                <View >

                    <Text style={styles.loginTitle}>
                        LOGIN
                    </Text>
                    <View style={styles.inputView} >

                        <TextInput
                            style={styles.inputText}
                            onChangeText={text => onChangeText(text)}
                            value={email}
                        />
                    </View>
                    <View style={styles.inputView} >
                    <   TextInput
                        style={styles.inputText}
                        onChangeText={text => onChangeTextPass(text)}
                        value={pass}
                        />
                    </View>
                    <Button
                        title="Entrar"
                        onPress={() => navigation.navigate('Eventos')}
                    />
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#451c68',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        textAlign: 'center',

    },
    loginTitle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 10,
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
    }

});
