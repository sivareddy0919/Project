import React from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DoctorSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* Content of the container at the top */}
        <Text style={styles.heading}> </Text>
      </View>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={windowWidth * 0.06} color="black" style={styles.searchIcon} />
        <TextInput
          placeholder="Search patients..."
          style={styles.searchInput}
          // Add onChangeText handler to handle search logic
        />
      </View>
      {/* Additional Containers */}
      <View style={styles.additionalContainer1} />
      <View style={styles.additionalContainer2} />
      <View style={styles.additionalContainer3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  topContainer: {
    paddingTop: windowHeight * 0.02,
    paddingRight: windowWidth * 0.05,
    backgroundColor: 'red',
    borderBottomColor: 'black',
    height: windowHeight * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
  },
  heading: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    color: '#000000', // Change text color to white
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: windowHeight * 0.1,
    width: '80%',
    backgroundColor: '#BBB7B7',
    paddingHorizontal: windowWidth * 0.02,
    borderRadius: windowWidth * 0.04,
    top: windowHeight * -0.03,
  },
  searchIcon: {
    marginRight: windowWidth * 0.02,
  },
  searchInput: {
    flex: 1,
    fontSize: windowWidth * 0.04,
    paddingVertical: windowHeight * 0.015,
  },
  additionalContainer1: {
    marginBottom: windowHeight * 0.10, // Adjust the marginBottom to provide spacing between the container and buttons
    backgroundColor: '#BBB7B7',
    borderRadius: 10,
    width: '50%',
    paddingVertical: windowHeight * 0.090,
    paddingHorizontal: windowWidth * 0.40,
    top: windowHeight * 0.01,
  },
  additionalContainer2: {
    marginBottom: windowHeight * 0.10, // Adjust the marginBottom to provide spacing between the container and buttons
    backgroundColor: '#BBB7B7',
    borderRadius: 10,
    width: '50%',
    paddingVertical: windowHeight * 0.090,
    paddingHorizontal: windowWidth * 0.40,
    top: windowHeight * -0.04,
  },
  additionalContainer3: {
    marginBottom: windowHeight * 0.10, // Adjust the marginBottom to provide spacing between the container and buttons
    backgroundColor: '#BBB7B7',
    borderRadius: 10,
    width: '50%',
    paddingVertical: windowHeight * 0.090,
    paddingHorizontal: windowWidth * 0.40,
    top: windowHeight * -0.09,
  },
});

export default DoctorSearch;
