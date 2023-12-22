import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,
     ActivityIndicator, ScrollView } from 'react-native';

export default function Details({route, navigation}) {
    const [dataLoading, finishLoading] = useState(true);
    const [allAlbumData, setAllAlbumData] = useState([]);
    const {albumId} = route.params;
    const selectedAlbum = allAlbumData.find(album => album.id === id);

    useEffect(() => {
        fetchAlbumDetails();
    },[])

    const fetchAlbumDetails = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then((res) => res.json())
        .then((data) => setAllAlbumData(data))
        .catch((err) => {
            console.log(err);
        })
        .finally(() => finishLoading(false))
    }
  return (
    <View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
        >
            <Text style = {styles.buttontext}>Go Back</Text>
        </TouchableOpacity>
        {dataLoading ? <ActivityIndicator/> : (
            <ScrollView>
                <Text>{selectedAlbum.id}</Text>
            </ScrollView>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    button: {
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    buttontext: {
        fontFamily: 'OpenSans',
        fontWeight: 'bold'
    }
});
