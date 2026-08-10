import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function DetailsScreen({ route }) {
  const { post } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>News Details</Text>

      <Text style={styles.label}>Title:</Text>
      <Text style={styles.title}>{post.title}</Text>

      <Text style={styles.label}>Post ID:</Text>
      <Text style={styles.id}>{post.id}</Text>

      <Text style={styles.label}>News:</Text>
      <Text style={styles.body}>{post.body}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },

  title: {
    fontSize: 20,
    textTransform: 'capitalize',
  },

  id: {
    fontSize: 18,
  },

  body: {
    fontSize: 17,
    lineHeight: 25,
  },
});