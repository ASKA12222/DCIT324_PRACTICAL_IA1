import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Unable to load news. Please check your internet connection.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text style={styles.loading}>Loading news...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus News</Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('News Details', {
                post: item,
              })
            }
          >
            <Text style={styles.title}>{item.title}</Text>

            <Text style={styles.body} numberOfLines={2}>
              {item.body}
            </Text>

            <Text style={styles.readMore}>Read More →</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  card: {
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderRadius: 8,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'capitalize',
  },

  body: {
    fontSize: 14,
    marginBottom: 10,
  },

  readMore: {
    fontWeight: 'bold',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  loading: {
    marginTop: 10,
    fontSize: 16,
  },

  error: {
    fontSize: 16,
    textAlign: 'center',
  },
});