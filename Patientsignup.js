import React, { useState } from 'react';
import { ScrollView, View, TextInput, StyleSheet, Dimensions, Text, TouchableOpacity, Alert } from 'react-native';

const { width, height } = Dimensions.get('window');

const PatientSignup = () => {
  const [patientName, setPatientName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');

  const handleSignup = () => {
    // Perform password validation
    if (password !== reenterPassword) {
      Alert.alert("Passwords do not match!");
      return;
    }

    // Here you can make an API request to submit the form data to the server
    const signupApiUrl = 'http://172.18.21.9/Database/Patientsignup.php'; // Update URL for sign-up endpoint
    
    fetch(signupApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        patientName, 
        contactNumber, 
        email, 
        gender, 
        age, 
        bloodGroup, 
        username, 
        password,
        reenterPassword
      }), // Send all signup data
    })
      .then(response => response.json())
      .then(data => {
        console.log('Signup Response:', data);
        if (data.status === 'success') {
          Alert.alert('Signup successful!'); // Alert user about successful signup
          // Optionally, you can navigate to a different screen after successful signup
        } else {
          Alert.alert('Signup failed. Please try again.'); // Alert user about failed signup
        }
      })
      .catch(error => {
        console.error('Signup Error:', error);
        Alert.alert('Signup failed. Please try again later.'); // Alert user about error during signup
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* Content of the container at the top */}
        <Text style={styles.heading}>Patient Signup</Text>
      </View>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={patientName}
          onChangeText={setPatientName}
        />

        <TextInput
          style={styles.input}
          placeholder="Contact Number"
          value={contactNumber}
          onChangeText={setContactNumber}
        />

        <TextInput
          style={styles.input}
          placeholder="E-Mail"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
        />

        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
        />

        <TextInput
          style={styles.input}
          placeholder="Blood Group"
          value={bloodGroup}
          onChangeText={setBloodGroup}
        />

        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setusername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Re-enter Password"
          secureTextEntry={true}
          value={reenterPassword}
          onChangeText={setReenterPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginText} onPress={() => console.log("Navigate to Login screen")}>
          <Text style={[styles.logintext, { fontSize: 18, color: '#3a3a3a' }]}>Already a user? Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};



const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: width * 0.0001, // 10% of the screen width
    paddingTop: windowHeight * 0.0010, // 5% of the screen height
  },
  topContainer: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'red',
    borderBottomWidth: 0,
    borderBottomColor: 'black',
    height: windowHeight * 0.14, // 10% of the screen height
    top: windowHeight *-0.01,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22, // Adjust the font size as needed
    fontWeight: 'bold',
  },
  formContainer: {
    flexGrow: 1, // Occupy remaining space
    marginTop: 20, // Adjust spacing between top container and form
  },
  input: {
    fontSize: 18, // Adjust the font size as needed
    borderWidth: 0,
    borderColor: '#FFFFFF',
    borderRadius: 15,
    left: 37,
    padding: 8,
    marginBottom: windowHeight * 0.03,
    width: '80%',
    backgroundColor: '#BBB7B7', // Light grey background color
  },
  button: {
    alignSelf: 'center', // Align to center horizontally
    width: '30%', // Set button width to 50% of the screen width
    marginTop: 20, // Add margin from the previous element
    backgroundColor: '#D73636', // Button background color
    borderRadius: 15, // Button border radius
    paddingVertical: 12, // Vertical padding
    paddingHorizontal: 7, // Horizontal padding
    alignItems: 'center', // Center align children horizontally
  },
  buttonText: {
    color: '#FFFFFF', // Text color
    fontSize: 20, // Font size
    fontWeight: 'bold', // Bold font weight
  },
  loginText: {
    marginTop: 20,
    alignItems: 'center',
  },
  logintext: {
    fontSize: 16,
    color: '#3a3a3a', // Change font color
  },
});

export default PatientSignup;
