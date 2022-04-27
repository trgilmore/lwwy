import {Pressable, StyleSheet} from 'react-native';
import { Text, View } from '../components/Themed';
import {FontAwesome} from "@expo/vector-icons";
import EditScreenInfo from "../components/EditScreenInfo";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {RootTabScreenProps} from "../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useState} from "react";

interface StarterScreenProps {
navigation : RootTabScreenProps<'Starter'>
}

let STARTER_OBJECT = {}
const getData = async () => {
    try {
        STARTER_OBJECT = await AsyncStorage.getItem('starters').then()
        //return STARTER_OBJECT != null? JSON.parse(STARTER_OBJECT) : null;
    } catch (e) {
        // saving error
    }
}
console.log(getData())
const StarterScreen = (props: StarterScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{STARTER_OBJECT.name}</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});

export default StarterScreen;