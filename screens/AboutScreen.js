import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About</Text>

      <Text style={styles.title}>Campus News</Text>

      <Text style={styles.text}>DCIT 324</Text>

      <Text style={styles.text}>
        Mobile Application Development
      </Text>

      <Text style={styles.label}>Developed by:</Text>
      <Text style={styles.text}>Prince Abeiku Quainoo</Text>

      <Text style={styles.label}>Student ID:</Text>
      <Text style={styles.text}>22046275</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },

  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  text: {
    fontSize: 18,
    marginBottom: 10,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
});