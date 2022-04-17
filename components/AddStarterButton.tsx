import {Text, View} from "./Themed";
import {MonoText} from "./StyledText";
import {Pressable, StyleSheet, TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";
import {FontAwesome} from "@expo/vector-icons";


export default function AddStarterButton() {
    return (
          <Pressable
            onPress={() => {}}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>
        <View style={styles.button}>
        <FontAwesome name={'plus'} size={36} />
        </View>
          </Pressable>
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