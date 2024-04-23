import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const GlucoseTracker = () => {
  const navigation = useNavigation(); // Initialize navigation object
  const [glucoseEntries, setGlucoseEntries] = useState([]);
  const [glucoseLevel, setGlucoseLevel] = useState('');

  const handleAddGlucose = () => {
    if (glucoseLevel.trim() !== '') {
      const newEntry = {
        id: Date.now(),
        level: glucoseLevel.trim(),
        timestamp: new Date().toLocaleString()
      };
      setGlucoseEntries([...glucoseEntries, newEntry]);
      setGlucoseLevel('');
    }
  };
  
  const handleViewGlucoseEntry = () => {
    navigation.navigate('GlucoseEntry'); // Navigate to GlucoseEntry screen
  };

  const handleGlucoseTracker = () => {
    navigation.navigate('GlucoseTracker'); // Navigate to GlucoseTracker screen
  };

  const handleProfileNavigation = () => {
    navigation.navigate('Patientprofile'); // Navigate to PatientProfile screen
  };

  const handlesignOutIconClick = () => {
    navigation.navigate('Patientlogin');
    
  };
     
  const handleBellIconClick = () => {
    navigation.navigate('PatientNotification');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        {/* Content of the container at the top */}
        <Text style={styles.heading}>Glucose</Text>
        <TouchableOpacity onPress={handleProfileNavigation}>
          <FontAwesome name="user-circle-o" size={35} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          {/* Container above the buttons */}
          <View style={styles.scrollImagesContainer}>
            <Image source={require('./assets/scroll1.png')} style={[styles.scrollImage]} /> 
            <Image source={require('./assets/scroll2.png')} style={[styles.scrollImage]} />
            <Image source={require('./assets/scroll3.png')} style={[styles.scrollImage]} />
          </View>
        </View>
        {/* New Container */}
        <View style={styles.additionalContainer}>
          {/* Content of the additional container */}
          <View style={styles.horizontalButtonsContainer}>
            <TouchableOpacity style={styles.additionalButton}>
              <Text style={styles.buttonText}>T</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.additionalButton}>
              <Text style={styles.buttonText}>Y</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.additionalButton}>
              <Text style={styles.buttonText}>D</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* End of New Container */}
        {/* New Container */}
        <View style={styles.grayContainer}>
          {/* Content of the gray container */}
        </View>
        {/* End of New Container */}
        {/* New Container */}
        <View style={styles.additionalGrayContainer}>
          {/* Content of the additional gray container */}
          <FontAwesome name="home" size={35} style={styles.homeIcon} />
          <FontAwesome name="bell" size={30} style={styles.bellIcon} onPress={handleBellIconClick} />
          <FontAwesome name="sign-out" size={35} style={styles.signOutIcon} onPress={handlesignOutIconClick} />
        </View>
        {/* End of New Container */}
        <TouchableOpacity onPress={handleViewGlucoseEntry} style={[styles.button, styles.GlucoseEntryButton]}>
          <Text style={styles.buttonText}>Glucose Entry</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGlucoseTracker} style={[styles.button, styles.glucoseTrackerButton]}>
          <Text style={styles.buttonText}>Glucose Tracker</Text>
        </TouchableOpacity>
        <ScrollView style={styles.scrollView}>
          {glucoseEntries.map(entry => (
            <Text key={entry.id} style={styles.entryText}>
              {entry.timestamp}: {entry.level} mg/dL
            </Text>
          ))}
        </ScrollView>
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
    backgroundColor: 'red',
    borderBottomWidth: 0,
    borderBottomColor: 'black',
    height: windowHeight * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // Align items in a row
    justifyContent: 'space-between', // Space between items
  },
  container: {
    flex: 1,
    paddingHorizontal: windowWidth * 0.05,
    justifyContent: 'center', // Add justifyContent to center buttons vertically
    alignItems: 'center', // Center items horizontally
  },
  upperContainer: {
    marginBottom: windowHeight * 0.10, // Adjust the marginBottom to provide spacing between the container and buttons
    backgroundColor: '#BBB7B7',
    borderRadius: 10,
    width: '50%',
    paddingVertical: windowHeight * 0.030,
    paddingHorizontal: windowWidth * 0.40,
    top: windowHeight * 0.04,
  },
  scrollImagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: windowWidth * 0.25, 
    height: windowWidth * 0.25,
    paddingHorizontal: windowWidth * 0.01, // Adjusted padding
  },
  scrollImage: {
    resizeMode: 'contain',
    width: windowWidth * 0.25, 
    height: windowWidth * 0.25,
  },
  button: {
    marginBottom: windowHeight * 0.03, // Adjust the marginBottom to provide spacing between button
    backgroundColor: '#D73636',
    borderRadius: 10,
    paddingVertical: windowHeight * 0.0125,
    paddingHorizontal: windowWidth * 0.15, // Change the width of the button
    alignItems: 'center',
    top: windowWidth * -0.17
  },
  GlucoseEntryButton: {
    marginBottom: windowHeight * 0.04, // Adjust the marginBottom to provide spacing between buttons
    height: windowHeight * 0.07,
    width: windowWidth* 0.75
  },
  glucoseTrackerButton: {
    marginBottom: windowHeight * 0.03, // Adjust the marginBottom to provide spacing between 
    height: windowHeight * 0.07,
    width: windowWidth* 0.76
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: windowHeight * 0.030,
  },
  scrollView: {
    flex: 1,
    marginBottom: windowHeight * 0.02,
  },
  entryText: {
    fontSize: windowHeight * 0.030,
    marginBottom: windowHeight * 0.01,
  },
  additionalContainer: {
    marginBottom: windowHeight * 0.03, // Adjust the marginBottom to provide spacing between the container and buttons
    backgroundColor: '#BBB7B7',
    borderRadius: 10,
    width: '50%',
    paddingVertical: windowHeight * 0.080,
    paddingHorizontal: windowWidth * 0.40,
    bottom: windowHeight * 0.030,
    top: windowHeight * 0.003,
    // styles for additional container
  },
  additionalGrayContainer: {
    backgroundColor: '#D73636',
    borderRadius: 20,
    width: '60%',
    paddingVertical: windowHeight * -0.01,
    paddingHorizontal: windowWidth * 0.40,
    marginBottom: windowHeight * 0.025,
    top: windowHeight * 0.32,
    height: windowHeight* 0.09,
    // styles for additional gray container
  },
  homeIcon: {
    width: 40, // Adjust width of the icon
    height: 40, // Adjust height of the icon
    marginRight: 10, // Adjust spacing between icons if needed
    color: '#000000', // Color of the home icon
    right: windowWidth* 0.3,
    top: windowHeight* 0.025
  },
  bellIcon: {
    width: 40, // Adjust width of the icon
    height: 40, // Adjust height of the icon
    marginRight: 10, // Adjust spacing between icons if needed
    color: '#000000', // Color of the bell icon
    top: windowHeight* -0.022,
    right: windowWidth * 0.015
  },
  signOutIcon: {
    width: 40, // Adjust width of the icon
    height: 40, // Adjust height of the icon
    marginRight: 10, // Adjust spacing between icons if needed
    color: '#000000', // Color of the sign-out icon
    left: windowWidth* 0.25,
    top: windowHeight* -0.077,
  },
  heading: {
    fontSize: 30, // Adjust the font size as needed
    fontWeight: 'bold',
    left: windowWidth* 0.28,
  },
  profileIcon: {
    color: '#000000',
    marginLeft: 'auto', // Push the icon to the right side
  },
  horizontalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: windowWidth * -0.1,
    marginTop: windowHeight * -0.3,
    left:windowWidth *-0.33,
  },
  additionalButton: {
    backgroundColor: '#D73636',
    borderRadius: 10,
    paddingVertical: windowHeight * 0.0100,
    paddingHorizontal: windowWidth * 0.03,
    alignItems: 'center',
    top: windowHeight*0.25,
    height: 70, 
    width: 80,
  },
});

export default GlucoseTracker;
