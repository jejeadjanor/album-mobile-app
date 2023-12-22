import React, {useEffect, useState} from 'react';
import { StyleSheet, View, TouchableOpacity,
      ScrollView } from 'react-native';
import {
Button,
Card,
Text,
} from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

import { getAlbumsById, deleteAlbumsById } from '../service/albumService';

const numColumns = 2;

export default function Details({navigation}) {
    const route = useRoute();
    const { albumId } = route.params;
    const [album, setAlbum] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const data = await getAlbumsById(albumId)
            setAlbum(data.data)
        }
        fetchData();

    }, []);

    console.log(album)
  return (
    <View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
        >
            <Text style = {styles.buttontext}>Go Back</Text>
        </TouchableOpacity>

    <ScrollView
    >
      {album.map((al) => (
        <Card style={styles.card} key={al.id}>
            {/* <Card.Title id={al.id} title={al.title}/> */}
            <Card.Cover source={{ uri: al.url }}/>
            <Card.Content>
                <Button
                icon="bucket"
                onPress={() => {deleteAlbumsById(albumId,al.id)}}
                style={styles.button}
                contentStyle={styles.flexReverse}
                >
                Delete
                </Button>
            </Card.Content>
        </Card>
        ))}
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    card : {
        margin: 4,
        // maxWidth: '40%',
    },
    button: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontext: {
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    }
});
