import axios from 'axios';
import {API_TOKEN, API_URL} from '@env';

const getUser = (userId) => {
  console.log('passed', `${API_URL}/users/${userId}`)
  axios({
    method: 'get',
    url: `${API_URL}/users/${userId}`,
    headers: {
        Authorization: `Bearer ${API_TOKEN}`
    }
  }).then((response) => {
    console.log('user', response.data);
  })
};


const getFavorites = (userId) => {
  const user = getUser(userId)
    let favorites = [];
    let userFav = user?.favorites || []
    for (const el of userFav) {
      axios.get(`${API_URL}/favorites/${el.id}?populate=*`, { headers: { "Authorization": AuthStr } }).then((response) => {

        response = response.data[0]
        let favoriteType = null
        let favoriteId = null

        if(response.track.data){
          let favoriteType = 'tracks'
          let favoriteId = response.track.data[0].id
        }else{
          let favoriteType = 'places'
          let favoriteId = response.track.data[0].id
        }

        axios.get(`${API_URL}/${favoriteType}/${favoriteId}?populate=*`, { headers: { "Authorization": AuthStr } }).then((response) => {
          let data = response.data[0];
          let attributes = data.attributes
          let favorite = {
            'type' : favoriteType === 'tracks' ? 'Circuit' : 'Lieu',
            'price' : attributes.price,
            'rating' : attributes.rating,
            'title' : attributes.name,
            'description' : attributes.description,
            'image' : attributes.image.formats.large.url,
            'id' : data.id
          }
          favorites.push(favorite)
        });
      });
    }

    return favorites
};

export {
  getUser,
  getFavorites
}