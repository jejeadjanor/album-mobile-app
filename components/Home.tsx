import React, { useEffect, useState } from 'react'
import { ActivityIndicator,ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import {
  List
} from 'react-native-paper';

import { getAlbums } from '../service/albumService';

const HomeScreen = ({ route, navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [albums, setAlbums] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const data: any = await getAlbums().finally(() => setLoading(false))
            setAlbums(data.data)
            

        }
        fetchData();

    }, []);

    const navigateToPhotos = (id) => {
        navigation.navigate('Details', { albumId: id })
    }

    console.log(albums)
    return (
      <ScrollView
      style={[styles.container, { backgroundColor: '#E0E0E0' }]}
      contentContainerStyle={styles.content}
    >
      {isLoading ? <ActivityIndicator size='large'/> : (
      albums.map((album) => (
      <TouchableOpacity key={album.id} onPress={() => navigateToPhotos(album.id)}>
          <List.Item key={album.id} title={album.title} style={styles.card}
          />
      </TouchableOpacity> 
      )))}
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  button: {
    margin: 4,
  },
})

export default HomeScreen;