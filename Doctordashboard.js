import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const GlucoseTracker = () => {
  const navigation = useNavigation(); // Initialize navigation object
  const [glucoseEntries, setGlucoseEntries] = useState([]);
  const [glucoseLevel, setGlucoseLevel] = useState('');

  const handleProfileNavigation = () => {
    navigation.navigate('Doctorprofile'); 
  };

  const handleSignOut = () => {
    // Logic for signing out
    // Navigate to Doctor login page
    navigation.navigate('Doctorlogin'); 
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        {/* Content of the container at the top */}
        <Text style={styles.heading}>Welcome</Text>
        <TouchableOpacity onPress={handleProfileNavigation}>
          <FontAwesome name="user-circle-o" size={35} style={styles.profileIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.upperContainer}>
          {/* Container above the buttons */}
        </View>
        {/* New Container */}
        <View style={styles.additionalContainer}>
          {/* Content of the additional container */}
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
          <FontAwesome name="search" size={32} style={styles.searchIcon} />
          <FontAwesome name="sign-out" size={35} style={styles.signOutIcon} />
        </View>
        {/* End of New Container */}
        {/* New Container */}
        <View style={styles.newContainer}>
          {/* Content of the new container */}
        </View>
        {/* End of New Container */}
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
    paddingVertical: windowHeight * 0.090,
    paddingHorizontal: windowWidth * 0.40,
    top: windowHeight * 0.04,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: windowHeight * 0.030,
  },
  additionalContainer: {
    marginBottom: windowHeight * 0.06, // Adjust the marginBottom to provide spacing between the container and buttons
    backgroundColor: '#BBB7B7',
    borderRadius: 10,
    width: '50%',
    paddingVertical: windowHeight * 0.060,
    paddingHorizontal: windowWidth * 0.40,
    bottom: windowHeight * 0.030,
    top: windowHeight * -0.018,
    // styles for additional container
  },
  additionalGrayContainer: {
    backgroundColor: '#D73636',
    borderRadius: 20,
    width: '60%',
    paddingVertical: windowHeight * -0.01,
    paddingHorizontal: windowWidth * 0.40,
    marginBottom: windowHeight * 0.030,
    top: windowHeight * 0.3,
    height: windowHeight * 0.09,
    // styles for additional gray container
  },
  newContainer: {
    backgroundColor: '#BBB7B7',
    borderRadius: 10,
    width: '50%',
    paddingVertical: windowHeight * 0.15,
    paddingHorizontal: windowWidth * 0.35,
    marginBottom: windowHeight * -0.025,
    top: windowHeight * -0.16,
    // styles for new container
  },
  homeIcon: {
    width: 40, // Adjust width of the icon
    height: 40, // Adjust height of the icon
    marginRight: 10, // Adjust spacing between icons if needed
    color: '#000000', // Color of the home icon
    right: windowWidth * 0.3,
    top: windowHeight * 0.025
  },
  searchIcon: {
    width: 40, // Adjust width of the icon
    height: 40, // Adjust height of the icon
    marginRight: 10, // Adjust spacing between icons if needed
    color: '#000000', // Color of the search icon
    top: windowHeight * -0.023,
    left: windowWidth * -0.03,
  },
  signOutIcon: {
    width: 40, // Adjust width of the icon
    height: 40, // Adjust height of the icon
    marginRight: 10, // Adjust spacing between icons if needed
    color: '#000000', // Color of the sign-out icon
    left: windowWidth * 0.25,
    top: windowHeight * -0.077,
  },
  heading: {
    fontSize: 30, // Adjust the font size as needed
    fontWeight: 'bold',
    left:windowWidth* 0.26,
  },
  profileIcon: {
    color: '#000000',
    marginLeft: 'auto', // Push the icon to the right side
  },
});

export default GlucoseTracker;
