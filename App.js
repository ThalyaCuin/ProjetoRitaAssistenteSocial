import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import pacientesScreen from "./screens/pacientes";
import Assistentecreen from "./screens/Assistente";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="pacientes" component={pacientesScreen} />
        <Stack.Screen name="Assistente" component={Assistentecreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;