import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import StarterButton from "../components/StarterButton";
import AddStarterButton from "../components/AddStarterButton";

export default function Home({ navigation }: RootTabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.categoryTitle}>Starters</Text>
      {/*<View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />*/}
      <AddStarterButton />
      {/*<StarterButton />*/}
      <EditScreenInfo path="/screens/Home.tsx" />
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

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '30%',
  },
});
