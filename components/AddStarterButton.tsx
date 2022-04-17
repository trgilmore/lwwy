import {Text, View} from "./Themed";
import {MonoText} from "./StyledText";
import {StyleSheet, TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";
import {FontAwesome} from "@expo/vector-icons";


export default function AddStarterButton() {
    return (
        <View style={styles.button}>
        <FontAwesome name={'plus'} size={36} />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 75,
        width: 75,
        alignItems: 'center',
        backgroundColor: '#C1B2AB',
        borderRadius: 6,
        justifyContent: 'center',
    },
});