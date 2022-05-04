import {Text, View} from "./Themed";
import {Pressable, StyleSheet, TouchableOpacity} from "react-native";


interface StarterButtonProps {
   onPress: () => void;
   name: string;
}
let getInitials = (string: string) => {
    let names = string.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

export default function StarterButton(props: StarterButtonProps) {
    return (

          <Pressable
            onPress={props.onPress}
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}>

        <View style={styles.button}>
        <Text style={styles.buttonText}>{getInitials(props.name)}</Text>
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