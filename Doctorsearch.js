import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Image, Alert, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DoctorSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    const searchApiUrl = 'http://192.168.31.121/Database/Doctorsearch.php'; // Your API endpoint

    fetch(searchApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: searchText }), // Ensure the key 'username' is used here
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.status === 'error') {
          throw new Error(data.message);
        }
        console.log('Search Result:', data);
        setSearchResults(data.doctors); // Assuming the API returns an array of doctor objects under the 'doctors' key
      })
      .catch(error => {
        console.error('Search Error:', error);
        Alert.alert('Search failed', error.message);
      });
  };

  const renderDoctorItem = ({ item }) => (
    <View style={styles.additionalContainer}>
      <Image source={require('./assets/PatientIcon.png')} style={styles.image} />
      <Text style={styles.doctorName}>Doctor Name: {item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.heading}>Doctor Search</Text>
      </View>
      <View style={styles.searchContainer}>
        <MaterialIcons name="search" size={windowWidth * 0.06} color="black" style={styles.searchIcon} />
        <TextInput
          placeholder="Search Patients..."
          style={styles.searchInput}
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
      </View>
      <FlatList
        data={searchResults}
        renderItem={renderDoctorItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.resultContainer}
      />
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
    backgroundColor: '#603F83FF',
    borderBottomColor: 'black',
    height: windowHeight * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth,
  },
  heading: {
    fontSize: windowWidth * 0.06,
    fontWeight: 'bold',
    color: '#000000',
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
  resultContainer: {
    marginTop: windowHeight * 0.05,
    width: '100%',
    alignItems: 'center',
  },
  additionalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: windowHeight * 0.05,
    backgroundColor: '#BBB7B7',
    borderRadius: 10,
    width: '90%', // Adjusted width to fit better
    paddingVertical: windowHeight * 0.02,
    paddingHorizontal: windowWidth * 0.12,
  },
  image: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    borderRadius: windowWidth * 0.1,
    marginRight: windowWidth * 0.04,
  },
  doctorName: {
    fontSize: windowWidth * 0.05,
    color: 'black',
  },
});

export default DoctorSearch;
