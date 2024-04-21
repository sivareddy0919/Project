import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Welcome';
import Interphase from './Interphase';
import Patientlogin from './Patientlogin';
import Patientsignup from './Patientsignup';
import Doctorlogin from './Doctorlogin';
import Duplicate from './Duplicate';
import Patientprofile from './Patientprofile';
import GlucoseEntry from './GlucoseEntry';
import GlucoseTracker from './GlucoseTracker'; // Import GlucoseTracker component
import Doctordashboard from './Doctordashboard';
import Doctorprofile from './Doctorprofile';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={Welcome}
          options={{ headerShown: false }} />
        <Stack.Screen 
          name="Interphase" 
          component={Interphase} 
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Patientlogin"
          component={Patientlogin}
          options={{headerShown: false}}/>
        <Stack.Screen
          name="Patientsignup"
          component={Patientsignup}
          options={{headerShown: false}}/>
        <Stack.Screen
          name="Doctorlogin"
          component={Doctorlogin}
          options={{headerShown: false}}/>
        <Stack.Screen
          name="Duplicate"
          component={Duplicate}
          options={{headerShown: false}}/>
        <Stack.Screen
          name="Patientprofile"
          component={Patientprofile}
          options={{headerShown: false}}/>
        <Stack.Screen
          name="GlucoseEntry"
          component={GlucoseEntry}
          options={{headerShown: false}}/>
        <Stack.Screen
          name="GlucoseTracker"
          component={GlucoseTracker}
          options={{headerShown: false}}/>
        <Stack.Screen
          name="Doctordashboard"
          component={Doctordashboard}
          options={{headerShown: false}}/>
        <Stack.Screen
          name="Doctorprofile"
          component={Doctorprofile}
          options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
