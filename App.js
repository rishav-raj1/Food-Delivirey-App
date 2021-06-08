import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import COLORS from './src/consts/colors';
import DetailsScreen from './src/views/screens/DetailsScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import OnBoardScreen from './src/views/screens/OnBoardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;





{/*import React from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

function ScreenA({navigation}){

  const onPresssHandler = () => {
    navigation.navigate('Screen_B');
  }
  return(
    <View style={style.body} >
      <Text style={style.text}>
        Screen A
      </Text>
      <Pressable
      onPress={ onPresssHandler }
      style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : 'yellow'})}
      >
      <Text style={style.text}>
        Go To Screen B
      </Text>
      </Pressable>
    </View>
  )
}

function ScreenB({navigation}){

  const onPresssHandler = () => {
    //navigation.navigate('Screen_A');
    navigation.goBack();

  }
  return(
    <View style={style.body} >
      <Text style={style.text}>
        Screen B
      </Text>
      <Pressable
      onPress={ onPresssHandler }
      style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : 'purple'})}
      >
      <Text style={style.text}>
        Go Back to Screen A
      </Text>
      </Pressable>
      <Text> rishav </Text>
        <Feather name="activity" style={{fontSize:50}}/>
        <Feather name="battery-charging" style={{fontSize:50}}/>
        <FontAwesome name="apple" style={{fontSize:50, color:'grey'}}/>
        <FontAwesome name="amazon" style={{fontSize:50, color:'orange'}}/>
    </View>
  )
}

function App(){
 return (
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen
       name="Screen_A"
       component={ScreenA}
       
       />
       <Stack.Screen
       name="Screen_B"
       component={ScreenB}
       />
     </Stack.Navigator>
   </NavigationContainer>
 )
 }

 const style = StyleSheet.create({
   body: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text: {
     fontSize: 40,
     fontWeight: 'bold',
     margin: 10,
   }
 })

 export default App;

*/}
