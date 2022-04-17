import {Text, View} from "./Themed";
import {MonoText} from "./StyledText";
import {StyleSheet, TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";


export default function StarterButton() {
    return (
        <View style={styles.button}>
        <Text style={styles.buttonText}>SA</Text>
        </View>
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
    },
    buttonText: {
        fontSize: 36,
    }
});