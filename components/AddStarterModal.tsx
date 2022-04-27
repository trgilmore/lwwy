import {Alert, Pressable, StyleSheet, Switch, Text, TextInput} from "react-native";
import {Picker} from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import {View} from "./Themed";
import {useState} from "react";
import {FontAwesome} from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppStartModalProps {
    onRequestClose: () => void
}

const AddStarterModal = (props: AppStartModalProps) => {
    const [selectedFlour, setSelectedFlour] = useState('');
    const [flourAmount, setFlourAmount] = useState('');
    const [isChecked, setChecked] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [starterName, setStarterName] = useState('');
    const [starterSeed, setStarterSeed] = useState('');
    const [seedAmount, setSeedAmount] = useState('');
    const [waterAmount, setWaterAmount] = useState('');
    const [feedingInterval, setFeedingInterval] = useState('');
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const NEW_STARTER = {
        name: starterName,
        waterAmount: waterAmount,
        flourType: selectedFlour,
        flourAmount: flourAmount,
        startFromScratch: isChecked,
        seedStarter: isChecked? null : starterSeed,
        seedAmount: isChecked? null : seedAmount,
        feedingInterval: feedingInterval,
        notification: isEnabled,
        dateCreated: new Date(),
    }
    const storeData = async () => {
        try {
            await AsyncStorage.setItem('starters', JSON.stringify(NEW_STARTER))
        } catch (e) {
            // saving error
        }
    }
    const onFeed = () => {
        storeData();
        props.onRequestClose;
    }
    console.log(NEW_STARTER)
    return (
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <TextInput style={styles.inputName} placeholder="Name" onChangeText={(data) => setStarterName(data)}/>
                    <View style={styles.inputCategory}>
                        <Text style={styles.categoryLabel}>Water</Text>
                        <TextInput style={styles.inputNum} placeholder="0g" keyboardType="numeric" onChangeText={(data) => setWaterAmount(data)}/>
                    </View>
                    <View style={styles.inputCategory}>
                        <View style={styles.pickerView}>
                        <Picker
                            prompt="Select your flour"
                            mode='dropdown'
                            style={styles.picker}
                            selectedValue={selectedFlour}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedFlour(itemValue)
                            }>
                            <Picker.Item label="Flour Type" value='null' />
                            <Picker.Item label="KA Organic Bread Flour" value="KAOBF" />
                            <Picker.Item label="BRM All Purpose" value="BRMAP" />
                        </Picker>
                        </View>
                        <TextInput style={styles.inputNum} placeholder="0g" keyboardType="numeric" onChangeText={(data) => setFlourAmount(data)}/>
                    </View>
                    <Text style={styles.promptText}>Add additional flour type</Text>
                    <Pressable onPress={() => Alert.alert('Feature not yet available')}>
                        {/*TODO Add feature for additional flours in starter*/}
                    <View style={styles.addButton}>
                        <FontAwesome name={'plus'} size={24} />
                    </View>
                    </Pressable>
                    <View style={styles.inputScratchCategory}>
                    <Text style={styles.promptText}>Starting from scratch?</Text>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#559CAD' : undefined} />
                    </View>
                    <View style={styles.inputCategory}>
                        <View style={styles.pickerView}>
                            <Picker
                                enabled={!isChecked}
                                mode='dropdown'
                                style={styles.picker}
                                selectedValue={starterSeed}
                                onValueChange={(itemValue, itemIndex) =>
                                    setStarterSeed(itemValue)
                                }>
                                <Picker.Item label="Starter" value='null' />
                                <Picker.Item label="Louie" value="louie" />
                                <Picker.Item label="Corey" value="corey" />
                            </Picker>
                        </View>
                        <TextInput value={isChecked? '0' : undefined} style={styles.inputNum} placeholder="0g" keyboardType="numeric" onChangeText={(data) => setSeedAmount(data)}/>
                    </View>
                    <View style={styles.inputCategory}>
                        <Text style={styles.categoryLabel}>Feeding Interval</Text>
                        <TextInput style={styles.inputNum} placeholder="24h" keyboardType="numeric" onChangeText={(data) => setFeedingInterval(data)}/>
                    </View>
                    <View style={styles.inputCategory}>
                        <FontAwesome style={styles.bell} name={isEnabled? 'bell' : 'bell-slash'} size={25} color={'black'}/>
                        <Switch
                            trackColor={{ false: "#767577", true: '#559CAD' }}
                            thumbColor={isEnabled ? "#ffffff" : "#ffffff"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={styles.inputCategory}>
                    <Pressable
                        style={[styles.button]}
                        onPress={props.onRequestClose.bind(storeData)}
                    >
                        <Text style={styles.textStyle}>Feed Starter</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.button]}
                        onPress={props.onRequestClose}>
                        <Text style={styles.textStyle}>Cancel</Text>
                    </Pressable>
                    </View>
                </View>
            </View>

)}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    modalView: {
        height: 530,
        width: 320,
        margin: 20,
        backgroundColor: '#C1B2AB',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 4,
        padding: 10,
        elevation: 2,
        backgroundColor: '#559CAD',
        height: 43,

    },
    textStyle: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    inputText: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
    },
    inputName:{
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        marginBottom: 10,
        height: 43,
        width: 270,
    },
    inputNum: {
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        height: 43,
        width: 114,
    },
    inputCategory: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 270,
        height: 43,
        backgroundColor: '#C1B2AB',
        marginBottom: 10,
    },
    inputScratchCategory: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: 270,
        height: 28,
        backgroundColor: '#C1B2AB',
        marginBottom:4,
    },
    categoryLabel: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        textAlign: "center",
        textAlignVertical: 'center',
        height: 43,
        width: 114,
    },
    picker: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 22,
        alignSelf: 'center',
        height: 43,
        width: 138,
    },
    pickerView: {
        backgroundColor: '#FFFFFF',
        paddingLeft: 10,
        justifyContent: 'center',
        borderRadius: 4,
        height: 43,
        width: 114,
    },
    promptText: {
        textAlign: 'left',
        width: 270
    },
    addButton: {
        height: 43,
        width: 270,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        justifyContent: 'center',
        marginBottom: 10,
    },
    checkbox: {
        marginLeft: -18,
    },
    bell: {
        textAlign: "center",
        textAlignVertical: 'center',
        height: 43,
        width: 114,
    },
});

export default AddStarterModal;