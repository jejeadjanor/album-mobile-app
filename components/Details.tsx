import React, {useEffect, useState} from 'react';
import { ActivityIndicator, StyleSheet, View, TouchableOpacity,
      ScrollView } from 'react-native';
import {
Button,
Card,
Text,
} from 'react-native-paper';
import { useRoute } from '@react-navigation/native';

import { getAlbumsById, deleteAlbumsById } from '../service/albumService';

// const numColumns = 2;

export default function Details({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const route = useRoute();
    const  { albumId }:any  = route.params;
    const [album, setAlbum] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const data: any = await getAlbumsById(albumId).finally(() => setLoading(false))
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
    {isLoading ? <ActivityIndicator size='large'/> : (
      album.map((al) => (
        <Card style={styles.card} key={al.id}>
            {/* <Card.Title id={al.id} title={al.title}/> */}
            <Card.Cover source={{ uri: al.url }}/>
            <Card.Content>
                <Button
                icon="bucket"
                onPress={() => {deleteAlbumsById(albumId,al.id)}}
                style={styles.button}
                >
                Delete
                </Button>
            </Card.Content>
        </Card>
        )))}
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    card : {
        margin: 4,
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
