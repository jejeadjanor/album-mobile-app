import React, {useEffect, useState} from 'react';
import { KeyboardAvoidingView,TouchachbleOpacity, StyleSheet, Text, View, TextInput} from 'react-native';
import Albums from './Albums';

export default function Home() {
  const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetchData();
    },[])

    const fetchData = async () => {
        await fetch('https://jsonplaceholder.typicode.com/albums')
        .then((res) => res.json())
        .then((data) => setAlbums(data))
        .catch((err) => {
            console.log(err);
        })
    }

    console.log(albums)
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Photo Album</Text>
      </View>
      <View style={styles.items}>
        {
          albums.map((album) => (
            <Albums id={album.id} key={album.id} text={album.title}/>
          ))
        }
      </View>
      
      {/* <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTaskWrapper}
    >
      <TextInput style={styles.input} placeholder={'Write a task'}/>
      <TouchachbleOpacity>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchachbleOpacity>
    </KeyboardAvoidingView> */}
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0'
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
});
