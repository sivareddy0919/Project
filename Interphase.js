
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  const handleDoctorLogin = () => {
    // Navigate to the doctor login page
    navigation.navigate('Doctorlogin');
  };

  const handlePatientLogin = () => {
    // Navigate to the patient login page
    navigation.navigate('Patientlogin');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.circle, styles.largeCircle]}>
        <Image 
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-L3h7zOxRTPCS6_XnFLSPd4NEBs2SAMQMsfVs67M7jw&s.png'
          }} 
          style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleDoctorLogin}>
        <Text style={styles.buttonText}>Doctor Login</Text>
      </TouchableOpacity>
      <View style={styles.buttonGap} />
      <View style={[styles.circle, styles.smallCircle]}>
        <Image
          source ={{
            uri:'https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/hospital-patient-icon.png'
          }}
          style={styles.image} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePatientLogin}>
        <Text style={styles.buttonText}>Patient Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  circle: {
    backgroundColor: '#ffff',
    marginBottom: windowHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeCircle: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    borderRadius: (windowWidth * 0.4) / 2,
  },
  smallCircle: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    borderRadius: (windowWidth * 0.4) / 2,
  },
  button: {
    backgroundColor: '#D73636',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '60%',
    marginBottom: windowHeight * 0.03,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 21,
    color: '#FFFFFF',
  },
  buttonGap: {
    marginVertical: windowHeight * 0.05,
  },
  image: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3,
    resizeMode: 'contain',
  },
});

export default App;