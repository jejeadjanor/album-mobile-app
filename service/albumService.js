import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com'

const getAlbums = async () => {
    return new Promise((resolve, reject) =>{
        axios.get(baseUrl + '/albums')
        .then((res) => {
            console.log(res.data)
            resolve(res)
        })
        .catch((err) => reject(err));
    });
};

const getAlbumsById = async () => {
    return new Promise((resolve, reject) =>{
        axios.get(baseUrl + '/albums/' + id)
        .then((res) => {
            console.log(res.data)
            resolve(res)
        })
        .catch((err) => reject(err));
    });
}

export { getAlbums, getAlbumsById }