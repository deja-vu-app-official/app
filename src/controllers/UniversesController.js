import axios from 'axios';
import {API_TOKEN, API_URL, APP_ENV} from '@env';

const AuthStr = 'Bearer '.concat(API_TOKEN); 

const getUniverse = (universeId) => {  
  axios.get(`${API_URL}/universes/${universeId}?populate`, { headers: { Authorization: AuthStr } }).then((response) => {
    return response.data
  });
};

const getUniverses = (limit) => {  
  axios.get(`${API_URL}/universes?populate`, { headers: { Authorization: AuthStr } }).then((response) => {
    return limit ? response.data.slice(0, limit) : response.data
  });
};

export {
  getUniverse,
  getUniverses
}