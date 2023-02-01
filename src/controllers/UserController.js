import axios from 'axios';
import {API_TOKEN, API_URL, APP_ENV} from '@env';

const AuthStr = 'Bearer '.concat(API_TOKEN); 

const getUser = (userId) => {  
  axios.get(`${API_URL}/users/${userId}?populate=*`, { headers: { Authorization: AuthStr } }).then((response) => {
    if(APP_ENV === 'DEV'){
      console.log(response.data[0]);
    }
    return response.data[0]
  });
};


const getFavorites = (userId) => {
  const user = getUser(userId)
    let favorites = [];
    for (const el of user.favorites) {
      axios.get(`${API_URL}/favorites/${el.id}?populate=*`, { headers: { Authorization: AuthStr } }).then((response) => {

        let response = response.data[0]
        let favoriteType = null
        let favoriteId = null

        if(response.track.data){
          let favoriteType = 'tracks'
          let favoriteId = response.track.data[0].id
        }else{
          let favoriteType = 'places'
          let favoriteId = response.track.data[0].id
        }

        axios.get(`${API_URL}/${favoriteType}/${favoriteId}?populate=*`, { headers: { Authorization: AuthStr } }).then((response) => {
          let data = response.data[0];
          let attributes = data.attributes
          let favorite = [
            'type' = favoriteType === 'tracks' ? 'Circuit' : 'Lieu',
            'price' = attributes.price,
            'rating' = attributes.rating,
            'title' = attributes.name,
            'description' = attributes.description,
            'image' = attributes.image.formats.large.url,
            'id' = data.id
          ]
          favorites.push(favorite)
        });
      });
    }

    if(APP_ENV === 'DEV'){
      console.log(favorites);
    }
    return favorites
};

export {
  getUser,
  getFavorites
}