import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Chip,
  IconButton,
  Paragraph,
  Text,
} from 'react-native-paper';

import { getAlbums } from '../service/albumService';
import Albums from './Albums';

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
      style={[styles.container, { backgroundColor: '##E0E0E0' }]}
      contentContainerStyle={styles.content}
    >
      {albums.map((album) => (
      <Card style={styles.card} key={album.id}>
        <Card.Title id={album.id} title={album.title}/>
        <Card.Content>
            <Button
              icon="eye"
              onPress={() => {}}
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
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  button: {
    margin: 4,
  },
})

export default HomeScreen;