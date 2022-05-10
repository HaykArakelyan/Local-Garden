import { StyleSheet } from 'react-native';

import { Provider } from "react-redux";
import { Store } from './store/store.js';


import LoginScreen from './components/screens/LoginScreen.js';
import Dashboard from './components/screens/Dashboard.js';
import ProductCard from './components/reusable/ProductCard.js';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";



export default function App() {

  const Stack = createStackNavigator();
  const StackNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Product"
          component={ProductCard}
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    )
  }

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
