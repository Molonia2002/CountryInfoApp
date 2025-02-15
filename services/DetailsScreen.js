import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { country } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{country.name.common}</Text>
      <Image source={{ uri: country.flags.png }} style={styles.flag} />
      <Text style={styles.detail}>Capital: {country.capital?.[0] || 'N/A'}</Text>
      <Text style={styles.detail}>Population: {country.population.toLocaleString()}</Text>
      <Text style={styles.detail}>Continent: {country.continents?.[0] || 'N/A'}</Text>
      <Text style={styles.detail}>Country Code: {country.cca2}</Text>
      <Text style={styles.detail}>
        President: {country.government?.headOfState || 'Not available'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  flag: { width: 200, height: 120, alignSelf: 'center', marginBottom: 10 },
  detail: { fontSize: 16, marginBottom: 5 },
});

export default DetailsScreen;
