import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { fetchCountries } from '../services/api';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const loadCountries = async () => {
      const data = await fetchCountries();
      setCountries(data);
    };
    loadCountries();
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search countries..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredCountries}
        keyExtractor={(item) => item.cca2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.countryItem}
            onPress={() => navigation.navigate('Details', { country: item })}
          >
            <Text style={styles.countryName}>{item.name.common}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  searchBar: { padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
  countryItem: { padding: 15, borderBottomWidth: 1 },
  countryName: { fontSize: 16 },
});

export default HomeScreen;
