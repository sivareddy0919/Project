import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const DoctorLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); // Initialize navigation hook

  const handleLogin = () => {
    // Perform your login logic here
    const loginApiUrl = 'http://172.18.21.9/Database/Doctorlogin.php';
    
    fetch(loginApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Login Response:', data);
        if (data.status === 'success') {
          Alert.alert('Login successful!');
          navigation.navigate('Doctordashboard', { username }); // Pass username to dashboard screen
        } else {
          Alert.alert('Invalid username or password. Please try again.');
        }
      })
      .catch(error => {
        console.error('Login Error:', error);
        Alert.alert('Login failed. Please try again later.');
      });
  };
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        {/* Content of the container at the top */}
        <Text style={styles.heading}>Doctor Login</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            placeholderTextColor="#000000" // Black placeholder text color
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
            placeholderTextColor="#000000" // Black placeholder text color
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    paddingTop: windowHeight * 0.05,
    paddingHorizontal: windowWidth * 0.05,
    backgroundColor: '#603F83FF',
    borderBottomWidth: 0,
    borderBottomColor: 'black',
    height: windowHeight * 0.14,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: windowWidth * 0.05,
  },
  inputContainer: {
    width: '100%',
    marginBottom: windowHeight * 0.03,
  },
  input: {
    fontSize: 18, // Adjust the font size as needed
    borderWidth: 2,
    borderColor: '#FFFFFF',
    borderRadius: 15,
    left: 25,
    padding: 10,
    marginBottom: windowHeight * 0.03,
    width: '85%',
    backgroundColor: '#BBB7B7', // Light grey background color
  },
  button: {
    backgroundColor: '#603F83FF',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: windowWidth * 0.1,
    marginBottom: windowHeight * 0.03,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  heading: {
    fontSize: 26, // Adjust the font size as needed
    fontWeight: 'bold',
  },
});

export default DoctorLogin;
