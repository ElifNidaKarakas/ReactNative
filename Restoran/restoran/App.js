
import { StyleSheet, Text, View, FlatList } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResaultShowScreen from './src/ResaultShowScreen';


const Stack= createNativeStackNavigator();
export default function App() {
  return (//uygulamaya başlık veririz
    //hangi sayfaara yönlendireceksek onları burada verririz
    <NavigationContainer> 
      <Stack.Navigator screenOptions={{headerTitle:'Restoran Uygulaması'}}> 
       
        <Stack.Screen name="Search" component={SearchScreen}/>
        <Stack.Screen name="ResaultShow" component={ResaultShowScreen}/> 
      </Stack.Navigator>  
   </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({});