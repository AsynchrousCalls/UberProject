import {   StyleSheet,  View } from 'react-native';
import HomeScreen from './src/Screen/HomeScreen';

export default function App() {
  return (
     <View style={styles.container}>
      <HomeScreen/>
     </View>
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
