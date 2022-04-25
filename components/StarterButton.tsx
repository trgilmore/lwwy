import {Text, View} from "./Themed";
import {MonoText} from "./StyledText";
import {Pressable, StyleSheet, TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

interface StarterButtonProps {
    onPress: () => void
}

export default function StarterButton(props: StarterButtonProps) {
    return (
          <Pressable
            onPress={props.onPress}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>


        <View style={styles.button}>
        <Text style={styles.buttonText}>SA</Text>
        </View>
          </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 75,
        width: 75,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#559CAD',
        borderRadius: 6,

        marginHorizontal: 7,
    },
    buttonText: {
        fontSize: 36,
    }
});