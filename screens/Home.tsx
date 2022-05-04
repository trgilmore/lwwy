import { Modal, StyleSheet} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import StarterButton from "../components/StarterButton";
import AddStarterButton from "../components/AddStarterButton";
import AddStarterModal from "../components/AddStarterModal";
import {useState} from "react";
import StarterCollection from "../components/StarterCollection";

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  const [modalVisible, setModalVisible] = useState(false);
const existingStarters =[]
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Starters</Text>
      <View style={styles.starters} lightColor="#eee" darkColor="#242331" >
      <AddStarterButton onPress={() => setModalVisible(true)} />
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
      >
        <AddStarterModal onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}/>
      </Modal>
{/*<StarterCollection/>*/}
      <StarterButton onPress={ () => navigation.navigate('Starter')} name={'test'}/>
    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingLeft: 25,
    paddingTop: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryTitle: {
    alignItems: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '30%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  starters: {
    flexDirection:"row",
    height: 75,
  },
});
