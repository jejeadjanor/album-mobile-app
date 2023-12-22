import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet } from 'react-native';
import {
  Button,
  Card,
} from 'react-native-paper';

import { getAlbums } from '../service/albumService';

const HomeScreen = ({ route, navigation }) => {

    const [albums, setAlbums] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const data = await getAlbums()
            setAlbums(data.data)

        }
        fetchData();

    }, []);

    const navigateToProduct = (id) => {
        navigation.navigate('Details', { albumId: id })
    }

    console.log(albums)
    return (
      <ScrollView
      style={[styles.container, { backgroundColor: '#E0E0E0' }]}
      contentContainerStyle={styles.content}
    >
      {albums.map((album) => (
      <Card style={styles.card} key={album.id}>
        <Card.Title id={album.id} title={album.title}/>
        <Card.Content>
            <Button
              icon="eye"
              onPress={() => {navigateToProduct(album.id)}}
              style={styles.button}
              contentStyle={styles.flexReverse}
            >
              View Details
            </Button>
        </Card.Content>
      </Card>
      ))}
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
  },
  button: {
    margin: 4,
  },
})

export default HomeScreen;