import axios from 'axios';
import {API_TOKEN, API_URL, APP_ENV} from '@env';

const AuthStr = 'Bearer '.concat(API_TOKEN); 

const getPlace = (placeId) => {  
  axios.get(`${API_URL}/places/${placeId}?populate=*`, { headers: { Authorization: AuthStr } }).then((response) => {
    if(APP_ENV === 'DEV'){
      console.log(response.data);
    }
    return response.data
  });
};

const getPlaces = () => {  
  axios.get(`${API_URL}/places?populate=*`, { headers: { Authorization: AuthStr } }).then((response) => {
    if(APP_ENV === 'DEV'){
      console.log(response.data);
    }
    return response.data
  });
};

const getTopPlaces = () => {  
  axios.get(`${API_URL}/places?populate=*`, { headers: { Authorization: AuthStr } }).then((response) => {
    if(APP_ENV === 'DEV'){
      console.log(response.data);
    }
    return response.data
  });
};

export {
  getPlace,
  getPlaces,
  getTopPlaces
}