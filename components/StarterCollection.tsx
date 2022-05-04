import AsyncStorage from "@react-native-async-storage/async-storage";
import StarterButton from "./StarterButton";
import {RootTabScreenProps} from "../types";
import {StyleSheet} from "react-native";
import {View} from "./Themed";

interface StarterCollectionProps {
}


const getStarters = async () => {
    let data = await AsyncStorage.getItem("starters")
    let starterCollection = JSON.parse(data as string);
    //starterCollection = starterCollection.map((x: { name: string; }) => <StarterButton name={x.name} onPress={ () => navigation.navigate('Starter')}/>)
    return starterCollection

}
// @ts-ignore
let starterCollection = await getStarters()
console.log(typeof starterCollection)
export default async function StarterCollection(props: StarterCollectionProps, { navigation }: RootTabScreenProps<'Home'>) {

    return (
        <View style = {styles.collection}>
            {/*@ts-ignore*/}
        {starterCollection.map(({name}) => (
            <StarterButton name={name} onPress={ () => navigation.navigate('Starter')}/>
        ))}
        </View>
    )}


const styles = StyleSheet.create({
    collection: {
        height: 75,
        width: 275,
        alignItems: 'center',
        justifyContent: 'center',

    }
});